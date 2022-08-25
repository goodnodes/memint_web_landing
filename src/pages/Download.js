import "./Download.css";

function Download() {
  return (
    <div className="Download">
      <h1
        style={{
          color: "white",
          fontFamily: "mechanical-en",
          fontWeight: "400",
          letterSpacing: "3px",
        }}
      >
        DOWNLOADS
      </h1>
      <div style={{ display: "flex", marginTop: "5%" }}>
        <img src="icon/playstore.png" alt="playstore" />
        <img src="icon/appstore.png" alt="appstore" />
      </div>
    </div>
  );
}

export default Download;
