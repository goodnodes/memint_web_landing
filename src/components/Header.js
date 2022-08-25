import "./Header.css";

function Header({ onClick }) {
  return (
    <div className="container">
      <img
        src="icon/memint.png"
        style={{ marginLeft: "10%", height: "30%" }}
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
          >
            <p style={{ color: "white", fontWeight: "600" }}>Explore</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("About");
            }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>About</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Roadmap");
            }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>Roadmap</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Marketplace");
            }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>Marketplace</p>
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Download");
            }}
          >
            <p style={{ color: "white", fontWeight: "600" }}>Download</p>
          </div>
        </div>
      </div>
      <p style={{ paddingRight: "10%", color: "white", fontWeight: "700" }}>
        KOR
      </p>
    </div>
  );
}

export default Header;
