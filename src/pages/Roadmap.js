import "./Roadmap.scss";

function Roadmap({ engMode, roadmapRef }) {
  return (
    <div className="Roadmap" ref={roadmapRef}>
      <h1>ROADMAP</h1>
      {engMode ? (
        <img src="icon/roadmap-en.png" alt="roadmap" />
      ) : (
        <img src="icon/roadmap.png" alt="roadmap" />
      )}
    </div>
  );
}

export default Roadmap;
