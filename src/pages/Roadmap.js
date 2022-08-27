import { useEffect } from "react";
import "./Roadmap.css";

function Roadmap({ engMode, roadmapRef }) {
  // useEffect(() => {
  //   console.log(roadmapRef);
  // }, []);
  return (
    <div className="Roadmap" ref={roadmapRef}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "30%",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "mechanical-en",
            paddingTop: "8vh",
          }}
        >
          ROADMAP
        </h1>
      </div>
      {engMode ? (
        <img src="icon/roadmap-en.png" alt="roadmap" style={{ width: "80%" }} />
      ) : (
        <img src="icon/roadmap.png" alt="roadmap" style={{ width: "80%" }} />
      )}
    </div>
  );
}

export default Roadmap;
