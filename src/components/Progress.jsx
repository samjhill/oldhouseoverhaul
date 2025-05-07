import React, { useState } from "react";
import GanttChart from "./GanttChart";
import tasks from "./25_thomas_st_tasks.json";

function Progress() {
  const [showChart, setShowChart] = useState(false);

  const projectStart = new Date("2025-05-07");
  
  let currentDayOffset = 0;
  const tasksWithDates = tasks.map(task => {
    const start = new Date(projectStart);
    start.setDate(start.getDate() + currentDayOffset);
  
    const end = new Date(start);
    end.setDate(start.getDate() + task.duration_in_days);
  
    currentDayOffset += task.duration_in_days;
  
    return {
      ...task,
      start: start.toISOString().split('T')[0],
      end: end.toISOString().split('T')[0]
    };
  });
  

  return (
    <div className="p-4">
      
      <main>
      <h1 className="text-2xl font-bold mb-4" style={{marginLeft: "1rem"}}>House Renovation Timeline</h1>
        <section style={{maxWidth: "800px", padding: "1rem"}}>
          <h2>Drawings</h2>
          <p>todo: redact address from architectural drawings and put a link to them here</p>

          <h2>Permits</h2>
          <p>We spent about one year getting permits. Mainly due to a few back-and-forths on how the outside of the house could be modified, since it is pretty old, and as such, does not conform to the modern zoning ordinances. The work we planned to do required 3 variances. Getting on the zoning board meeting took about one month. It's also in a flood zone, so there were some comments from the state and our town's planning board about what work could be done.</p>
        </section>
      </main>
      <div style={{ overflowX: "scroll", marginBottom: "10rem"}}>
        <h2 style={{marginLeft: "1rem"}}>Construction</h2>
        <p style={{marginLeft: "1rem"}}>Here's a Gantt chart that shows our current construction progress and estimated timelines for various steps.</p>
        <button style={{marginLeft: "1rem"}} onClick={() => setShowChart(!showChart)}>{showChart ? "hide" : "show"} chart</button>
        {showChart && (
          <GanttChart tasks={tasksWithDates} />
        )}
      </div>
    </div>
  );
}

export default Progress;
