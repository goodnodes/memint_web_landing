import "./About.scss";

function About({ engMode, aboutRef }) {
  return (
    <div className="About" ref={aboutRef}>
      <div className="title">
        {engMode ? (
          <h1
            style={{ textAlign: "center", color: "white", lineHeight: "45px" }}
          >
            Meet New friends
            <br />
            in Group Dating
          </h1>
        ) : (
          <h1
            style={{ textAlign: "center", color: "white", lineHeight: "45px" }}
          >
            퇴근 후에 뭐해?
            <br />
            <span>2:2 미팅&nbsp;</span>어때!
          </h1>
        )}
      </div>
      <div className="step1">
        <div className="transparentbox">
          <h1>step1</h1>
          <div className="content">
            {engMode ? (
              <img
                src="icon/meetingmeta-en.png"
                alt="meetingmeta-en"
                id="meetingmeta"
              />
            ) : (
              <img
                src="icon/meetingmeta.png"
                alt="meetingmeta"
                id="meetingmeta"
              />
            )}
            <div className="text">
              {engMode ? (
                <>
                  <h2>
                    Join any group datings
                    <br />
                    or you can make your
                    <br />
                    own group dating
                  </h2>
                  <h3 style={{ fontSize: 15, color: "#58FF7D" }}>
                    create new room +
                  </h3>
                </>
              ) : (
                <>
                  <h2>
                    원하는 미팅에 참여하세요.
                    <br />
                    또는 새로운 미팅을 만들어
                    <br />
                    직접 주선해보아요!
                  </h2>
                  <h3 style={{ fontSize: 15, color: "#58FF7D" }}>
                    미팅 생성 +
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="step2">
        <div className="transparentbox">
          <div className="step2_title">
            <h1>step2</h1>
            {engMode ? (
              <>
                <h2>
                  Chat with firends
                  <br />
                  before dating
                </h2>
              </>
            ) : (
              <>
                <h2>
                  매칭된 미팅메이트들과
                  <br />
                  대화를 나누세요!
                </h2>
              </>
            )}
          </div>
          <div>
            {engMode ? (
              <img src="icon/chat-en.png" alt="chat-en" />
            ) : (
              <img src="icon/chat.png" alt="chat" />
            )}
          </div>
        </div>
      </div>
      <div className="step3">
        <div className="transparentbox">
          <h1>step3</h1>
          <div className="content">
            <div style={{ borderRadius: "15px" }}>
              {engMode ? (
                <img src="icon/verify-en.png" alt="verify-en" />
              ) : (
                <img src="icon/verify.png" alt="verify" />
              )}
            </div>
            <div className="text">
              {engMode ? (
                <img
                  src="icon/verifybutton-en.png"
                  alt="verifybutton-en"
                  className="verify-button"
                />
              ) : (
                <img
                  src="icon/verifybutton.png"
                  alt="verifybutton"
                  className="verify-button"
                />
              )}
              {engMode ? (
                <>
                  <h2>
                    Meet Friends
                    <br />
                    and upload selfie
                    <br />
                    for confirm
                  </h2>
                </>
              ) : (
                <>
                  <h2>
                    새로운 친구들과의
                    <br />
                    만남을 즐겨보세요
                    <br />
                    <br />
                    만나면 인증샷은
                    <br />
                    필수!
                  </h2>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="step4">
        <div className="transparentbox">
          <div className="step4_title">
            <h1>step4</h1>
            {engMode ? (
              <>
                <h2>Get TINGs!</h2>
              </>
            ) : (
              <>
                <h2>
                  미팅에 성실히 임한 당신,
                  <br />
                  TING으로 보상 받으세요!
                </h2>
              </>
            )}
          </div>
          <div className="content">
            <img src="icon/smallcoin.png" alt="smallcoin" id="smallcoin" />
            <h1>TING</h1>
            <img src="icon/bigcoin.png" alt="bigcoin" id="bigcoin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
