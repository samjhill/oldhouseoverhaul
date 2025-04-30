import React from "react";
import GanttChart from "./GanttChart";
import tasks from "./25_thomas_st_tasks.json";

function Progress() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">House Renovation Timeline</h1>
      <div style={{maxWidth: "90%"}}>
      <GanttChart tasks={tasks} />
      </div>
    </div>
  );
}

export default Progress;
