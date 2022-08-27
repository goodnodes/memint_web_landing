import "./Header.css";

function Header({ onClick, engMode, setEngMode }) {
  return (
    <div className="container">
      <img
        src="icon/logo.png"
        style={{ marginLeft: "10%", height: "70%" }}
        alt="logo"
      />
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <div
            className="tab"
            onClick={() => {
              onClick("Explore");
            }}
            style={{ cursor: "pointer" }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>Explore</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("About");
            }}
            style={{ cursor: "pointer" }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>About</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Roadmap");
            }}
            style={{ cursor: "pointer" }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>Roadmap</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Marketplace");
            }}
            style={{ cursor: "pointer" }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>Marketplace</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Download");
            }}
            style={{ cursor: "pointer" }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>Download</p>
          </div>
        </div>
      </div>
      <p
        style={{
          paddingRight: "10%",
          color: "white",
          fontWeight: "700",
          cursor: "pointer",
        }}
        onClick={() => {
          setEngMode(!engMode);
        }}
      >
        {engMode ? "ENG" : "KOR"}
      </p>
    </div>
  );
}

export default Header;
