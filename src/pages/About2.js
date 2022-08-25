import "./About2.css";

function About2() {
  return (
    <div className="About2">
      <div className="container1">
        <div
          style={{
            flex: 1,

            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10%",
            }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <h3>이 귀여운 공룡은 뭐야~</h3>
              <h1>나만을 위한 NFT 아바타</h1>
              <div style={{ flex: 1, width: "100%" }}>
                <img src="icon/avatar.png" alt="avatar" />
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,

              position: "relative",
            }}
          >
            <h3>호감을 표현할 타이밍을 놓쳤다면,</h3>
            <h1>
              후기 작성으로
              <br />
              전하는 마음
            </h1>
            <img src="icon/dontsend.png" alt="dontsend" />
            <img
              alt="emotion"
              src="icon/emotion.png"
              style={{ height: "54%", width: "60%", position: "absolute" }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "60%",
              width: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <h3>어떤 사람이 미팅하는지 궁금해!</h3>
            <h1 style={{ marginTop: -10 }}>베일에 싸인</h1>
            <h1 style={{ marginTop: -20 }}>프로필 이미지 확인</h1>
            <img src="icon/profile.png" alt="profile" />
          </div>
        </div>
      </div>
      <div className="container2">
        <h1>더 나은 만남, 더 나은 미팅</h1>
        <h3 style={{ textAlign: "center", marginTop: -10 }}>
          좋은 사람들을 위한 좋은 커뮤니티를 지향합니다.
          <br />
          TING 보상 및 소모, 미팅 메이트 평가, 신고 등의 유저 관리 시스템과
          <br />
          모니터링으로 더 나은 커뮤니티를 만듭니다.
        </h3>
      </div>
    </div>
  );
}

export default About2;
