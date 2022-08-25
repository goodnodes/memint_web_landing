function Header({ onClick }) {
  return (
    <div
      style={{
        width: "100%",
        height: "9vh",
        display: "flex",
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",

        zIndex: 10,
      }}
    >
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
            Explore
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("About");
            }}
          >
            About
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Roadmap");
            }}
          >
            Roadmap
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Marketplace");
            }}
          >
            Marketplace
          </div>
          <div
            className="tab"
            onClick={() => {
              onClick("Download");
            }}
          >
            Download
          </div>
        </div>
      </div>
      <p style={{ paddingRight: "10%" }}>lang</p>
    </div>
  );
}

export default Header;
