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
      <img src="icon/roadmap.png" alt="roadmap" style={{ width: "80%" }} />
    </div>
  );
}

export default Roadmap;
