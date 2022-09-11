import { Link } from "react-router-dom";

function MobileHeader({ engMode, setEngMode }) {
  return (
    <div id="mobile_header">
      <Link to='/'>
      <img src="icon/logo.png" alt="logo" />
      </Link>
      <div className="buttonRow">
        <Link to="closed-beta">
          <button id="beta-button">
            {engMode ? "Closed Beta" : "클로즈베타"}
          </button>
        </Link>
        <button>{engMode ? "Download" : "앱 다운로드"}</button>
        <p
          onClick={() => {
            setEngMode(!engMode);
          }}
        >
          {engMode ? "ENG" : "KOR"}
        </p>
      </div>
    </div>
  );
}

export default MobileHeader;
