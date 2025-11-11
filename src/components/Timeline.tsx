import React, { useMemo } from "react";
import "./Timeline.css";
import { RawTimeline, useTimelineData } from "../hooks/useTimelineData";

type TimelineProps = {
  data?: RawTimeline | null;
  loading?: boolean;
  error?: string | null;
  showHeader?: boolean;
};

type ScheduledTimelineTask = RawTimeline["tasks"][number] & {
  index: number;
  durationDays: number;
  startDate: Date;
  endDate: Date;
  startISO: string;
  endISO: string;
  displayDate: string;
  isMultiDay: boolean;
  isHighlighted: boolean;
  isBlocking: boolean;
  isCompleted: boolean;
};

const toISODate = (value: Date) => value.toISOString().split("T")[0];

const formatSingleDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

const formatRange = (start: Date, end: Date) => {
  const sameYear = start.getFullYear() === end.getFullYear();
  const startPart = start.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    ...(sameYear ? {} : { year: "numeric" }),
  });
  const endPart = end.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return `${startPart} – ${endPart}`;
};

const normalizeDuration = (value: unknown, fallback = 1) => {
  const numeric = Number(value);
  if (Number.isFinite(numeric) && numeric > 0) {
    return Math.round(numeric);
  }
  return fallback;
};

const normalizeGap = (value: unknown) => {
  const numeric = Number(value);
  if (Number.isFinite(numeric) && numeric > 0) {
    return Math.round(numeric);
  }
  return 0;
};

const normalizeOffset = (value: unknown) => {
  const numeric = Number(value);
  if (Number.isFinite(numeric)) {
    return Math.round(numeric);
  }
  return null;
};

const deriveSchedule = (timeline: RawTimeline): ScheduledTimelineTask[] => {
  const anchor = new Date(`${timeline.anchor_date}T00:00:00`);
  const baseline = Number.isNaN(anchor.getTime()) ? new Date() : anchor;

  let cursor = new Date(baseline);

  return timeline.tasks.map((task, index) => {
    const durationDays = normalizeDuration(task.duration_days, 1);
    const gapAfterDays = normalizeGap(task.gap_after_days);
    const offset = normalizeOffset(task.start_offset_days);
    const isBlocking = task.blocking !== false;
    const isCompleted = Boolean(task.completed);

    let start = new Date(cursor);

    if (offset !== null) {
      const offsetStart = new Date(baseline);
      offsetStart.setDate(offsetStart.getDate() + offset);
      start = offsetStart;
    }

    const end = new Date(start);
    end.setDate(end.getDate() + durationDays - 1);

    const nextCursor = new Date(start);
    nextCursor.setDate(start.getDate() + durationDays + gapAfterDays);
    if (isBlocking && nextCursor.getTime() > cursor.getTime()) {
      cursor = nextCursor;
    }

    const isMultiDay = durationDays > 1;
    const displayDate = isMultiDay ? formatRange(start, end) : formatSingleDate(start);

    return {
      ...task,
      index,
      durationDays,
      startDate: start,
      endDate: end,
      startISO: toISODate(start),
      endISO: toISODate(end),
      displayDate,
      isMultiDay,
      isHighlighted: Boolean(task.highlight),
      isBlocking,
      isCompleted,
    };
  });
};

const formatUpdatedLabel = (timestamp?: string) => {
  const fallback = new Date();
  const base = timestamp ?? fallback.toISOString().split("T")[0];

  const parsed = new Date(`${base}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return base;
  }

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const Timeline: React.FC<TimelineProps> = (props) => {
  const { data, loading: loadingProp, error: errorProp, showHeader = true } = props;
  const dataPropProvided = Object.prototype.hasOwnProperty.call(props, "data");

  const { data: fetchedData, loading: fetchedLoading, error: fetchedError } = useTimelineData({
    skip: dataPropProvided,
  });

  const timeline = (dataPropProvided ? data ?? null : fetchedData) ?? null;
  const loading = dataPropProvided ? Boolean(loadingProp) : fetchedLoading;
  const error = dataPropProvided ? errorProp ?? null : fetchedError;

  const scheduledTasks = useMemo(() => {
    if (!timeline) {
      return [];
    }
    return deriveSchedule(timeline);
  }, [timeline]);

  const { activeTasks, completedTasks } = useMemo(() => {
    const active: ScheduledTimelineTask[] = [];
    const completedList: ScheduledTimelineTask[] = [];

    scheduledTasks.forEach((task) => {
      if (task.isCompleted) {
        completedList.push(task);
      } else {
        active.push(task);
      }
    });

    return { activeTasks: active, completedTasks: completedList };
  }, [scheduledTasks]);

  const startOfToday = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-lg bg-white shadow-sm">
        <p className="text-sm font-medium text-slate-500">Loading timeline…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-rose-200 bg-rose-50 p-6 text-rose-700 shadow-sm">
        <p className="font-semibold">Something went wrong</p>
        <p className="mt-1 text-sm text-rose-600">{error}</p>
      </div>
    );
  }

  if (!timeline) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        <p className="text-sm font-medium">Timeline data is not available yet.</p>
      </div>
    );
  }

  const updatedLabel = formatUpdatedLabel(timeline.updated);

  return (
    <section aria-label={timeline.title ?? "Project timeline"} className="timeline-wrapper">
      <div className="timeline-content">
        {showHeader && (
          <div className="timeline-header">
            {timeline.subtitle && <span className="timeline-subtitle">{timeline.subtitle}</span>}
            <h2 className="timeline-title">{timeline.title ?? "Project timeline"}</h2>
            {timeline.description && (
              <p className="timeline-description">{timeline.description}</p>
            )}
            {updatedLabel && <span className="timeline-updated-label">Updated {updatedLabel}</span>}
          </div>
        )}

        <div className="timeline-list">
          {activeTasks.length === 0 ? (
            <p className="timeline-empty">No upcoming tasks scheduled. Everything is marked complete!</p>
          ) : (
            activeTasks.map((entry) => {
              const isComplete = entry.endDate.getTime() < startOfToday.getTime();
              const itemClasses = `timeline-item${isComplete ? " complete" : ""}${
                entry.isHighlighted ? " highlight" : ""
              }`;
              const key = entry.id ?? `${entry.task}-${entry.index}`;

              return (
                <div key={key} className={itemClasses}>
                  <span className="timeline-marker" />
                  <div className="timeline-card">
                    <div className="timeline-top-row">
                      <span className="timeline-date">{entry.displayDate}</span>
                      <span className="timeline-responsible">{entry.responsible}</span>
                    </div>
                    <p className="timeline-task">{entry.task}</p>
                    {entry.isMultiDay && (
                      <div className="timeline-meta">
                        <span className="timeline-duration">
                          {entry.durationDays} {entry.durationDays === 1 ? "day" : "days"}
                        </span>
                      </div>
                    )}
                    <p className="timeline-notes">{entry.notes}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {completedTasks.length > 0 && (
          <details className="timeline-completed">
            <summary>
              Completed ({completedTasks.length})
            </summary>
            <div className="timeline-list">
              {completedTasks.map((entry) => {
                const itemClasses = `timeline-item completed-flag${
                  entry.isHighlighted ? " highlight" : ""
                }`;
                const key = entry.id ?? `${entry.task}-${entry.index}-completed`;

                return (
                  <div key={key} className={itemClasses}>
                    <span className="timeline-marker" />
                    <div className="timeline-card">
                      <div className="timeline-top-row">
                        <span className="timeline-date">{entry.displayDate}</span>
                        <span className="timeline-responsible">{entry.responsible}</span>
                      </div>
                      <p className="timeline-task">{entry.task}</p>
                      {entry.isMultiDay && (
                        <div className="timeline-meta">
                          <span className="timeline-duration">
                            {entry.durationDays} {entry.durationDays === 1 ? "day" : "days"}
                          </span>
                        </div>
                      )}
                      <p className="timeline-notes">{entry.notes}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </details>
        )}
      </div>
    </section>
  );
};

export default Timeline;


