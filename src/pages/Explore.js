import "./Explore.css";

function Explore() {
  return (
    <div className="Explore">
      <div className="ment">
        <p>즐거운 저녁을 함께할 친구를</p>
        <p style={{ marginTop: -10 }}> 찾는 가장 좋은 방법?</p>
        <p style={{ fontSize: 13 }}>직장인을 위한 Web3 미팅 앱, MEMINT</p>
      </div>
      <div className="download">
        <img className="arrow" src="icon/arrow.png"></img>
        <img className="egg" src="icon/egg.png"></img>
      </div>
      <div className="desc">
        <img
          src="icon/dinoeggs.png "
          style={{ height: "80%", marginRight: "60px" }}
        />
        <div className="textbox">
          <p>일상을 더 재미있게,</p>
          <p>당신을 위한 미팅앱</p>
          <p>미민트에서는 누구나 미팅을 열고 참여할 수 있어요.</p>
          <p>새로운 친구들과 더 재미있고 특별한 일상을 만들어보세요!</p>
          <p>열심히 미팅을 즐긴 당신,</p>
          <p>토큰(TING)보상은 덤(윙크)</p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
