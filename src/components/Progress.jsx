import React, { useMemo, useState } from "react";
import GanttChart from "./GanttChart";
import tasks from "./25_thomas_st_tasks.json";

const PROJECT_START = new Date("2025-05-01");

const formatDate = (date) => date.toISOString().split("T")[0];

const buildSchedule = (taskList) => {
  let cursor = new Date(PROJECT_START);

  return taskList.map((task) => {
    const duration = Math.max(1, Number(task.duration_in_days) || 1);
    const gapAfter = Number(task.gap_after_days ?? 0);

    const start = new Date(cursor);
    const end = new Date(start);
    end.setDate(end.getDate() + duration);

    const scheduledTask = {
      ...task,
      start: formatDate(start),
      end: formatDate(end),
    };

    cursor = new Date(end);
    if (!Number.isNaN(gapAfter) && gapAfter > 0) {
      cursor.setDate(cursor.getDate() + gapAfter);
    }

    return scheduledTask;
  });
};

function Progress() {
  const [showChart, setShowChart] = useState(false);

  const tasksWithDates = useMemo(() => buildSchedule(tasks), []);

  return (
    <div className="p-4">
      <main>
        <h1 className="text-2xl font-bold mb-4" style={{ marginLeft: "1rem" }}>
          House Renovation Timeline
        </h1>
        <section style={{ maxWidth: "800px", padding: "1rem" }}>
          <h2>Drawings</h2>
          <p>todo: redact address from architectural drawings and put a link to them here</p>

          <h2>Permits</h2>
          <p>
            We spent about one year getting permits. Mainly due to a few back-and-forths on how the
            outside of the house could be modified, since it is pretty old, and as such, does not
            conform to the modern zoning ordinances. The work we planned to do required 3 variances.
            Getting on the zoning board meeting took about one month. It's also in a flood zone, so
            there were some comments from the state and our town's planning board about what work could
            be done.
          </p>
        </section>
      </main>
      <div style={{ overflowX: "scroll", marginBottom: "10rem" }}>
        <h2 style={{ marginLeft: "1rem" }}>Construction</h2>
        <p style={{ marginLeft: "1rem" }}>
          Here's a Gantt chart that shows our current construction progress and estimated timelines for
          various steps.
        </p>
        <button style={{ marginLeft: "1rem" }} onClick={() => setShowChart(!showChart)}>
          {showChart ? "hide" : "show"} chart
        </button>
        {showChart && <GanttChart tasks={tasksWithDates} />}
      </div>
    </div>
  );
}

export default Progress;
