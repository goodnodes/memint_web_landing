import "./Download.css";

function Download({ engMode, downloadRef }) {
  return (
    <div className="Download" ref={downloadRef}>
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
        <img
          src="icon/playstore.png"
          alt="playstore"
          style={{ marginRight: "2.5%" }}
        />
        {engMode ? (
          <img
            src="icon/appstore-en.png"
            alt="appstore-en"
            style={{ marginLeft: "2.5%" }}
          />
        ) : (
          <img
            src="icon/appstore.png"
            alt="appstore"
            style={{ marginLeft: "2.5%" }}
          />
        )}
      </div>
    </div>
  );
}

export default Download;
