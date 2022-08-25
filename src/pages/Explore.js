import "./Explore.css";

function Explore() {
  return (
    <div className="Explore">
      <div className="ment">
        <h1
          style={{
            marginTop: "6%",
            textAlign: "center",
            lineHeight: "50px",
            fontFamily: "mechanical",
            fontWeight: "400",
            color: "white",
          }}
        >
          즐거운 저녁을 함께할 친구를
          <br /> 찾는 가장 좋은 방법?
        </h1>
        <h2 style={{ color: "#AAEFC1", fontWeight: 400 }}>
          직장인을 위한 Web3 미팅 앱, MEMINT
        </h2>
      </div>
      <div className="download">
        <h1
          style={{
            color: "white",
            fontFamily: "mechanical-en",
            fontSize: "40px",
            fontWeight: "400",
            marginTop: "4%",
          }}
        >
          COMING SOON!
        </h1>

        <img
          src="icon/eggdownload.png"
          style={{ width: "45%" }}
          alt="eggdownload"
        />
      </div>
      <div className="desc">
        <img
          alt="dinowitheggs"
          src="icon/dinowitheggs.png"
          style={{ height: "80%", marginRight: "60px" }}
        />
        <div className="textbox">
          <h1 style={{ color: "#58FF7D", marginTop: "6%" }}>
            일상을 더 재미있게,
          </h1>
          <h1 style={{ marginTop: "-19px", color: "white" }}>
            당신을 위한 미팅앱
          </h1>
          <h3 style={{ color: "white", lineHeight: "25px", fontWeight: "400" }}>
            미민트에서는 누구나 미팅을 열고 참여할 수 있어요. <br />
            새로운 친구들과 더 재미있고 특별한 일상을 만들어보세요!
          </h3>

          <h3 style={{ color: "white", lineHeight: "25px", fontWeight: "400" }}>
            열심히 미팅을 즐긴 당신,
            <br />
            토큰(TING)보상은 덤(윙크)
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Explore;
