function MobileHeader({ engMode, setEngMode }) {
  return (
    <div id="mobile_header">
      <img src="icon/logo.png" alt="logo" />
      <div className='buttonRow'>
        <button>{engMode?'Download':'앱 다운로드'}</button>
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
