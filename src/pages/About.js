import "./About.css";

function About() {
  return (
    <div className="About">
      <div className="title">
        <h1 style={{ textAlign: "center", color: "white", lineHeight: "45px" }}>
          퇴근 후에 뭐해?
          <br />
          2:2 미팅 어때!
        </h1>
      </div>
      <div className="step1">
        <div className="transparentbox">
          <h1 style={{ fontFamily: "mechanical-en", color: "#AEFFC1" }}>
            step1
          </h1>
          <div style={{ display: "flex", flex: 1 }}>
            <img
              src="icon/meetingmeta.png"
              alt="meetingmeta"
              style={{ height: "80%" }}
            />
            <div style={{ marginLeft: 40, flex: 1 }}>
              <h2
                style={{
                  marginTop: 6,
                  color: "white",
                  fontWeight: "400",
                  lineHeight: "30px",
                }}
              >
                원하는 미팅에 참여하세요.
                <br />
                또는 새로운 미팅을 만들어
                <br />
                직접 주선해보아요!
              </h2>
              <h3 style={{ fontSize: 15, color: "#58FF7D" }}>미팅 생성 +</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="step2">
        <div
          className="transparentbox"
          style={{ paddingRight: "6%", width: "40%", alignItems: "center" }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              width: "77%",
            }}
          >
            <h1 style={{ fontFamily: "mechanical-en", color: "#AEFFC1" }}>
              step2
            </h1>
            <h2
              style={{
                marginLeft: "6%",
                color: "white",
                fontWeight: "400",
                lineHeight: "30px",
              }}
            >
              매칭된 미팅메이트들과
              <br />
              대화를 나누세요!
            </h2>
          </div>
          <div>
            <img src="icon/chat.png" alt="chat" style={{ height: "83%" }} />
          </div>
        </div>
      </div>
      <div className="step3">
        <div
          className="transparentbox"
          style={{ paddingRight: "6%", width: "40%" }}
        >
          <h1 style={{ fontFamily: "mechanical-en", color: "#AEFFC1" }}>
            step3
          </h1>
          <div
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <div style={{ borderRadius: "15px" }}>
              <img
                src="icon/verify.png"
                alt="verify"
                style={{ height: "120%" }}
              />
            </div>
            <div style={{ marginLeft: 20, flex: 1 }}>
              <img
                src="icon/verifybutton.png"
                alt="verifybutton"
                style={{ height: "23%", marginLeft: "-20px" }}
              />
              <h2
                style={{
                  marginTop: "-11px",
                  color: "white",
                  fontWeight: "400",
                  lineHeight: "30px",
                }}
              >
                새로운 친구들과의
                <br />
                만남을 즐겨보세요
                <br />
                <br />
                만나면 인증샷은
                <br />
                필수!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="step4">
        <div
          className="transparentbox"
          style={{ paddingRight: "6%", width: "40%", alignItems: "center" }}
        >
          <div
            style={{
              display: "flex",
              width: "77%",
            }}
          >
            <h1 style={{ fontFamily: "mechanical-en", color: "#AEFFC1" }}>
              step4
            </h1>
            <h2
              style={{
                marginLeft: "6%",
                color: "white",
                fontWeight: "400",
                lineHeight: "30px",
              }}
            >
              미팅에 성실히 임한 당신,
              <br />
              TING으로 보상 받으세요!
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              width: "77%",
            }}
          >
            <div style={{ flex: 1, marginRight: "30px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src="icon/smallcoin.png"
                  alt="smallcoin"
                  style={{ width: "35%" }}
                />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <h1
                  style={{
                    fontSize: 60,
                    color: "white",
                    fontFamily: "mechanical-en",
                    fontWeight: "400",
                  }}
                >
                  TING
                </h1>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <img
                src="icon/bigcoin.png"
                alt="bigcoin"
                style={{ width: "180px", height: "180px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
