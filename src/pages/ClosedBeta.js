import React from "react";
import "./ClosedBeta.scss";

function ClosedBeta({ closedbetaRef }) {
  return (
    <div className="ClosedBeta" ref={closedbetaRef}>
      <h1>"미팅하고 싶은 사람 모여라!"</h1>
      <div className="beta-wrapper">
        <div className="col1">
          <h2>MEMINT 클로즈베타 테스터 모집</h2>
          <h3>
            미팅 플랫폼 앱 Memint를 런칭하기 전 앱을 체험해보실 테스터분들을
            모집합니다.
          </h3>

          <div className="desc-view">
            <div className="desc">
              <div className="introduction_textbox">
                새로운 친구를 만나 즐겁게 놀 수 있는 미팅! 꼭 주변 친구의 소개를
                통해서만 할 수 있나요? <br />
                1:1 만남의 데이팅앱이 부담스러웠다면 2:2, 3:3 미팅은 어떠세요?
                <br /> 새로운 친구를 만들고 싶은 누구나 Memint에서 미팅에 참여할
                수 있어요! <br />
                <br />
                지금 베타 테스터를 신청하고 누구보다 빨리 토큰 기반의 미팅앱
                Memint를 체험해보세요!
              </div>
              <div className="content">
                <h3>클로즈베타 테스터 모집 기간 및 일정</h3>
                <ul>
                  <li>지원 기간: 2022-09-13 ~ 2022-09-26</li>
                  <li>선정 및 발표: 9월 말 (개별 연락 예정)</li>
                  <li>활동 기간: 테스터 선정 발표 후 약 한 달간</li>
                </ul>
              </div>
              <div className="content">
                <h3>클로즈베타 테스터 활동 내용</h3>
                <ul>
                  <li>
                    미팅 플랫폼 앱 Memint를 통해 1회 이상 오프라인 미팅에
                    참여해요.
                  </li>
                  <li>
                    클로즈베타 종료 후 앱 개선을 위한 설문조사에 참여해요.
                  </li>
                </ul>
              </div>
              <div className="content">
                <h3>클로즈베타 테스터 혜택</h3>
                <ul>
                  <li>
                    Memint 앱 서비스 이용에 필요한 <span>TING 토큰</span>을
                    무료로 드려요.
                  </li>
                  <li>
                    미팅을 더 즐겁게 참여하실 수 있도록 다양한 상품과 이벤트를
                    준비했어요.
                  </li>
                  <li>
                    클로즈 베타 기간 종료 후 <span>우수 활동자</span>를 선발해
                    리워드를 드려요.
                  </li>
                </ul>
              </div>
              <br />
              <br />
              <div className="content">
                <h3>자격 요건</h3>
                <ul>
                  <li>아이폰 사용자</li>
                  <li>만 19세 이상의 성인 남녀</li>
                  <li>서울 내에서 미팅 참여가 가능하신 분</li>
                  <li>테스터 활동을 충실히 이행해 주실 분</li>
                </ul>
              </div>
              <div className="content">
                <h3>클로즈베타 참여 방법</h3>
                <ul>
                  <li>폼에서 설문조사와 개인 정보 작성을 진행해 주세요.</li>
                  <li>
                    클로즈베타 앱 출시 후에 남겨주신 연락처로 다운로드 방법을
                    안내드려요.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="form-container">
            <img src="icon/leftarrow.png" alt="arrow" id="left-arrow" />
            <a
              href="https://bit.ly/closedbeta_memint"
              target="_blank"
              title="MEMINT 클로즈베타 테스터 모집"
              rel="noreferrer"
            >
              <button>구글폼 입력하기</button>
            </a>
            <img src="icon/rightarrow.png" alt="arrow" id="right-arrow" />
          </div>
        </div>

        <div className="col2">
          <img
            src="icon/closedbeta_example.png"
            alt="app_example"
            id="app_example"
          />
        </div>
      </div>
    </div>
  );
}

export default ClosedBeta;
