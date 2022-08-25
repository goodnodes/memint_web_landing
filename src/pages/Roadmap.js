import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="Roadmap">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "30%",
          justifyContent: "center",
        }}
      >
        <h1>ROADMAP</h1>
      </div>
      <img src="icon/roadmap.png" style={{ width: "80%" }} />
    </div>
  );
}

export default Roadmap;
