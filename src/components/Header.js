import "../App.css";

function Header({ onClick }) {
  return (
    <div className="header">
      <p className="logo">Logo</p>
      <div className="box">
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
      <p className="lang">lang</p>
    </div>
  );
}

export default Header;
