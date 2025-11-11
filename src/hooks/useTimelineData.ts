import { useEffect, useState } from "react";

export const TIMELINE_SOURCE = "/data/timeline.json";

export type RawTimelineTask = {
  id?: string;
  task: string;
  responsible: string;
  notes: string;
  duration_days?: number;
  gap_after_days?: number;
  start_offset_days?: number;
  highlight?: boolean;
  blocking?: boolean;
  completed?: boolean;
};

export type RawTimeline = {
  title: string;
  subtitle?: string;
  updated?: string;
  anchor_date: string;
  description?: string;
  tasks: RawTimelineTask[];
};

type UseTimelineOptions = {
  skip?: boolean;
};

export function useTimelineData(options: UseTimelineOptions = {}) {
  const { skip = false } = options;

  const [data, setData] = useState<RawTimeline | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (skip) {
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(TIMELINE_SOURCE, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Timeline request failed (${response.status})`);
        }

        const payload = (await response.json()) as RawTimeline;
        setData(payload);
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          return;
        }

        setError("Unable to load the project timeline. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    load();

    return () => controller.abort();
  }, [skip]);

  return { data, loading, error } as const;
}


