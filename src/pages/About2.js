import "./About.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";

function About2({ engMode }) {
  return (
    <div className="About2">
      <div className="container1">
        <div className="col1">
          <div className="content1">
            {engMode ? (
              <>
                {/* <h3 style={{ color: "white" }}>Isn't it so lovely?</h3> */}
                <h1>Get Your Own NFT Avatar</h1>
              </>
            ) : (
              <>
                <h3 style={{ color: "white" }}>이 귀여운 공룡은 뭐야~</h3>
                <h1>나만을 위한 NFT 아바타</h1>
              </>
            )}
            <img src="icon/avatar.png" alt="avatar" />
          </div>
          <div className="content3">
            {engMode ? (
              <>
                {/* <h3 style={{ color: "white" }}>Interested in someone?</h3> */}
                <h1>
                  Send a Message
                  <br />
                  After Dating
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineCheckCircle color="gray" size={20} />
                  <p
                    style={{
                      color: "gray",
                      margin: 0,
                      marginLeft: 7,
                      marginTop: 2,
                    }}
                  >
                    Hide feedback
                  </p>
                </div>
              </>
            ) : (
              <>
                <h3 style={{ color: "white" }}>
                  호감을 표현할 타이밍을 놓쳤다면,
                </h3>
                <h1>
                  후기작성으로
                  <br />
                  전하는 마음
                </h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiOutlineCheckCircle color="gray" size={20} />
                  <p
                    style={{
                      color: "gray",
                      margin: 0,
                      marginLeft: 7,
                      marginTop: 2,
                    }}
                  >
                    상대방에게 보내지 않기
                  </p>
                </div>
              </>
            )}

            {engMode ? (
              <img alt="emotion-en" src="icon/emotion-en.png" />
            ) : (
              <img alt="emotion" src="icon/emotion.png" />
            )}
          </div>
        </div>
        <div className="col2">
          <div className="content2">
            {engMode ? (
              <div className="text">
                {/* <h3 style={{ color: "white" }}>Who is the member?</h3> */}
                <h1>Unveil Profile Image</h1>
                <h1>with Spending TING</h1>
              </div>
            ) : (
              <div className="text">
                <h3>어떤 사람이 미팅하는지 궁금해!</h3>
                <h1>베일에 싸인</h1>
                <h1>프로필 이미지 확인</h1>
              </div>
            )}
            <img src="icon/profile.png" alt="profile" />
          </div>
        </div>
      </div>

      <div className="container2">
        {engMode ? (
          <>
            <h1 style={{ color: "white" }}>Good Place for Good People</h1>
            <h3

            >
              We aim for a good place for good
              <br />
              people, Create a better community
              <br />
              with TING rewards & consumption,
              <br />
              user evaluation, reporting, and
              <br />
              management monitoring.
            </h3>
          </>
        ) : (
          <>
            <h1 style={{ color: "white" }}>더 나은 만남, 더 나은 미팅</h1>
            <h3
              style={{
                textAlign: "center",
                marginTop: -10,
                color: "white",
                lineHeight: "30px",
              }}
            >
              좋은 사람들을 위한 좋은 커뮤니티를 지향합니다.
              <br />
              TING 보상 및 소모, 미팅 메이트 평가, 신고 등의 유저 관리 시스템과
              <br />
              모니터링으로 더 나은 커뮤니티를 만듭니다.
            </h3>
          </>
        )}
      </div>
    </div>
  );
}

export default About2;
