import React from "react";
import "./MobileExplore.scss";

function MobileExplore({ engMode }) {
  return (
    <div id="mobile_explore">
      <div className="desc">
        {engMode ? (
          <>
            <h2>Join, Chat, Date,</h2>
            <h2>and Earn</h2>
            <h3>In Web3 Group Dating App, MEMINT</h3>
          </>
        ) : (
          <>
            <h2>즐거운 저녁을 함께할 친구를</h2>
            <h2>찾는 가장 좋은 방법?</h2>
            <h3>직장인을 위한 Web3 미팅 앱, MEMINT</h3>
          </>
        )}
      </div>
      <div className="comming_soon">COMING SOON!</div>
      <div className="download">
        <img id="arrow" src="icon/arrow.png" alt="arrow" />
        <img id="egg" src="icon/egg.png" alt="egg" />
      </div>
      <div className="desc2">
        {engMode ? (
          <h1>WHAT IS MEMINT</h1>
        ) : (
          <>
            <h1>일상을 더 재미있게!</h1>
            <h2>당신을 위한 미팅앱</h2>
          </>
        )}

        <div className="blank" />
        {engMode ? (
          <>
            <h4>MEMINT is a web3 dating app with </h4>
            <h4>Game-Fi elements where you can</h4>
            <h4>explore and participate in group datings</h4>
          </>
        ) : (
          <>
            <h4>미민트에서는 누구나 미팅을 열고 참여할 수 있어요.</h4>
            <h4>새로운 친구들과 더 재미있고 특별한</h4>
            <h4>일상을 만들어 보세요!</h4>
          </>
        )}

        <div className="blank" />
        {engMode ? (
          <>
            <h4>You can earn by making new friends</h4>
            <h4>and hanging out with them.</h4>
          </>
        ) : (
          <>
            <h4>열심히 미팅을 즐긴 당신,</h4>
            <h4>토큰(TING)보상은 덤 (윙크)</h4>
          </>
        )}

        <img id="right_coin" src="icon/bigcoin.png" alt="coin" />
        <img id="left_coin" src="icon/bigcoin.png" alt="coin" />
        <div className="blank_big" />
        {engMode ? (
          <>
            <h2>Meet New Friends</h2>
            <div>
              <h2>in &nbsp;</h2>
              <h1>Group Dating</h1>
            </div>
          </>
        ) : (
          <>
            <h2>퇴근 후에 뭐해?</h2>
            <div>
              <h1>2:2 미팅&nbsp;</h1>
              <h2>어때!</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MobileExplore;
