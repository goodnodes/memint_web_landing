import React from "react";
import "./ClosedBeta.scss";

function ClosedBeta({ closedbetaRef }) {
  return (
    <div className="ClosedBeta" ref={closedbetaRef}>
      <h1>"미팅하고 싶은 사람 모여라!"</h1>
      <div className="closed-beta-container">
        <div className="desc">
          <h2>MEMINT 클로즈베타 테스터 모집</h2>
          <div className="content">
            <h3>클로즈베타 테스터 혜택</h3>
            <ul>
              <li>Memint 앱 서비스 이용에 필요한 TING 토큰을 무료로 드려요.</li>
              <li>
                미팅을 더 즐겁게 참여하실 수 있도록 다양한 상품과 이벤트를
                준비했어요.
              </li>
              <li>
                클로즈 베타 기간 종료 후 우수 활동자를 선발해 리워드를 드려요.
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src='icon/memint-example.png' alt='app_example' id='app_example'/>
        </div>
      </div>
    </div>
  );
}

export default ClosedBeta;
