import "./Header.css";

function Header({ onClick }) {
  return (
    <div className="container">
      <p style={{ paddingLeft: "10%" }}>Logo</p>
      <div
        style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
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
      <p style={{ paddingRight: "10%" }}>lang</p>
    </div>
  );
}

export default Header;
