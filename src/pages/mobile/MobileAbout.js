import React from "react";
import "./MobileAbout.scss";

function MobileAbout({ engMode }) {
  return (
    <div id="mobile_about">
      <div className="box">
        <div className="box_title">
          <span>STEP 1</span>
          <div>
            {engMode
              ? "Join any group datings"
              : "원하는 미팅에 참여하세요. 또는"}
            <br />
            {engMode
              ? "or you can make your own group dating"
              : "새로운 미팅을 만들어 직접 주선해보아요!"}
          </div>
        </div>
        <img
          src={engMode ? "icon/meetingmeta-en.png" : "icon/meetingmeta.png"}
          alt="meeting"
        />
      </div>
      <div className="box">
        <div className="box_title">
          <span>STEP 2</span>
          <div>
            {engMode
              ? "Chat with friends before dating"
              : "매칭된 미팅메이트들과 대화를 나누세요!"}
          </div>
        </div>
        <img
          id="chat"
          src={engMode ? "icon/chat-en.png" : "icon/chat.png"}
          alt="chat"
        />
      </div>
      <div className="box">
        <div className="box_title">
          <span>STEP 3</span>
          <div>
            {engMode
              ? "Meet Friends and"
              : "새로운 친구들과의 만남을 즐겨보세요."}
            <br />
            {engMode ? "upload selfie for confirm" : "만나면 인증샷은 필수!"}
          </div>
        </div>
        <img
          id="verify"
          src={engMode ? "icon/verify-en.png" : "icon/verify.png"}
          alt="verify"
        />
      </div>
      <div className="box">
        <div className="box_title">
          <span>STEP 4</span>
          <div>
            {engMode ? "Get Tings!" : "미팅에 성실히 임한 당신,"}
            <br />
            {engMode ? "" : "TING으로 보상 받으세요!"}
          </div>
        </div>
        <section>
          <span>TING!</span>
          <img id="smallcoin" src="icon/smallcoin.png" alt="smallcoin" />
          <img id="bigcoin" src="icon/bigcoin.png" alt="bigcoin" />
        </section>
      </div>

      <div className="about2">
        <img src="icon/logo.png" alt="logo" id="logo" />
        <div className="desc">
          <div className="desc_row1">
            <img src="icon/roundmemin.png" alt="memin" id="memin_1" />
            <div className="rows">
              <h3>{engMode ? "Get Your Own" : "이 귀여운 공룡은 뭐야~"}</h3>
              <h2>{engMode ? "NFT Avater" : "나만을 위한 NFT 아바타"}</h2>
            </div>
          </div>
          <div className="desc_row2">
            <div className="rows">
              <div className="text_align">
                {engMode
                  ? "Unveil Profile Image with"
                  : "나랑 대화하는 이 사람, "}
                <br />
                {engMode ? "" : "어떤 사람인지 더 알고싶어!"}
              </div>
              <h2>
                {engMode ? "Spending TING" : "베일에 싸인 프로필 이미지 확인"}
              </h2>
            </div>
            <div className="img_view">
              <img src="icon/roundmemin.png" alt="memin" id="memin_2" />
              <img src="icon/manpic.png" alt="man" id="man" />
            </div>
          </div>
          <div className="desc_row1">
            <img src="icon/loveface.png" alt="memin" id="loveface" />
            <div className="rows">
              <h3>
                {engMode
                  ? "Send a Message"
                  : "호감을 표현할 타이밍을 놓쳤다면?"}
              </h3>
              <h2>{engMode ? "After Dating" : "후기 작성으로 전하는 마음"}</h2>
            </div>
          </div>
        </div>
        <div className="desc desc2">
          {engMode ? (
            <h1>Good Place for Good People</h1>
          ) : (
            <>
              <h1>더 나은 만남</h1>
              <h1>더 나은 미팅</h1>
            </>
          )}

          <div className="blank" />
          {engMode ? (
            <>
              <h4>We aim for a good place for good people</h4>
              <h4>Create a better community with</h4>
              <h4>TING rewards & comsumption, user evaluation</h4>
              <h4>reporting, and management monitoring.</h4>
            </>
          ) : (
            <>
              <h4>좋은 사람들을 위한 좋은 커뮤니티를 지향합니다.</h4>
              <h4>TING 보상과 소모, 미팅메이트 평가, 신고 등의 유저 관리</h4>
              <h4>시스템과 모니터링으로 더 나은 커뮤니티를 만듭니다.</h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileAbout;
