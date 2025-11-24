import React from "react";
import "./material-selections.css";

const MaterialSelectionsPage: React.FC = () => {
  return (
    <div className="material-selections-page">
      <div className="material-selections-hero">
        <p className="material-selections-eyebrow">25 Thomas St</p>
        <h1>Material Selections</h1>
        <p>
          Browse our curated material selections for the renovation. This interactive board shows
          all the materials, finishes, and fixtures we're considering for the project.
        </p>
      </div>

      <div className="material-selections-container">
        <iframe
          src="https://www.figma.com/proto/F6PSG35Vmzg9OPuL36Q6ez/Sam---Ashley?page-id=0%3A1&type=design&node-id=103-132&viewport=78%2C248%2C0.13&t=OfCKOpBi5KCOLY48-1&scaling=contain"
          title="Material Selections"
          className="material-selections-iframe"
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default MaterialSelectionsPage;

