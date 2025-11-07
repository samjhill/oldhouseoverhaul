import React, { useMemo } from "react";
import Timeline from "../components/Timeline";
import "./progress.css";
import { useTimelineData } from "../hooks/useTimelineData";

const formatUpdatedLabel = (timestamp?: string | null) => {
  if (!timestamp) {
    return null;
  }

  const parsed = new Date(`${timestamp}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return timestamp;
  }

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const ProgressPage: React.FC = () => {
  const { data, loading, error } = useTimelineData();

  const updatedDisplay = useMemo(() => formatUpdatedLabel(data?.updated ?? null), [data?.updated]);

  const title = data?.title ?? "Project Timeline";
  const subtitle = data?.subtitle ?? "Renovation Progress";
  const description =
    data?.description ??
    "A snapshot of where the renovation stands right now. Track each milestone to see who is leading the effort and how the job is pacing toward completion.";

  const locationLabel = useMemo(() => {
    const [firstSegment] = title.split("—");
    return (firstSegment || title).trim();
  }, [title]);

  return (
    <div className="progress-page">
      <div className="progress-container">
        <header className="progress-header">
          <p className="progress-label">{locationLabel}</p>
          <h1 className="progress-title">
            {title}
            {subtitle ? ` (${subtitle})` : ""}
          </h1>
          <p className="progress-intro">{description}</p>
          {updatedDisplay && <p className="progress-updated">Updated {updatedDisplay}</p>}
          {error && (
            <p className="progress-error">
              Unable to refresh the latest schedule right now. Showing the last saved plan.
            </p>
          )}
        </header>

        <Timeline data={data ?? null} loading={loading} error={error} showHeader={false} />
      </div>
    </div>
  );
};

export default ProgressPage;


