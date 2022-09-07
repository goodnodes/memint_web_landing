import React from "react";
import "./MobileRoadmap.scss";

function MobileRoadmap({ engMode }) {
  return (
    <div id="mobile_roadmap">
      <h1>ROADMAP</h1>
      <img
        src={engMode ? "icon/roadmap-en.png" : "icon/roadmap.png"}
        alt="roadmap"
      />
    </div>
  );
}

export default MobileRoadmap;
