import React, { useEffect, useRef } from "react";
import Gantt from "frappe-gantt";

const GanttChart = ({ tasks }) => {
  const ganttRef = useRef(null);

  useEffect(() => {
    if (ganttRef.current && tasks.length) {
      // Clear existing chart if re-rendered
      ganttRef.current.innerHTML = "";

      new Gantt(ganttRef.current, tasks, {
        on_click: (task) => {
          console.log("Task clicked", task);
        },
        on_date_change: (task, start, end) => {
          console.log("Date changed", task, start, end);
        },
        on_progress_change: (task, progress) => {
          console.log("Progress changed", task, progress);
        },
        on_view_change: (mode) => {
          console.log("View mode changed", mode);
        },
        auto_move_label: true,
        infinite_padding: false
      });
    }
  }, [tasks]);

  return <div ref={ganttRef} />;
};

export default GanttChart;
