import "./Download.scss";

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
      <div style={{ display: "flex", marginTop: "5%", justifyContent:'center' }}>
        <img
          src="icon/playstore.png"
          alt="playstore"
          style={{ marginRight: "2.5%", width: '35%' }}
        />
          <img
            src="icon/appstore-en.png"
            alt="appstore-en"
            style={{ marginLeft: "2.5%", width: '35%'}}
          />
      
      </div>
    </div>
  );
}

export default Download;
