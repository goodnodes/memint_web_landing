import "./About2.css";
import { AiOutlineCheckCircle } from "react-icons/ai";

function About2({ engMode }) {
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
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {engMode ? (
                <>
                  {/* <h3 style={{ color: "white" }}>Isn't it so lovely?</h3> */}
                  <h1 style={{ color: "white", marginTop: -10 }}>
                    Get Your Own NFT Avatar
                  </h1>
                </>
              ) : (
                <>
                  <h3 style={{ color: "white" }}>이 귀여운 공룡은 뭐야~</h3>
                  <h1 style={{ color: "white", marginTop: -10 }}>
                    나만을 위한 NFT 아바타
                  </h1>
                </>
              )}

              <img
                src="icon/avatar.png"
                alt="avatar"
                style={{ width: "67%" }}
              />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              position: "relative",
              marginLeft: "15%",
            }}
          >
            {engMode ? (
              <>
                {/* <h3 style={{ color: "white" }}>Interested in someone?</h3> */}
                <h1 style={{ color: "white", marginTop: -10, marginBottom: 0 }}>
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
                <h1 style={{ color: "white", marginTop: -10, marginBottom: 0 }}>
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
              <img
                alt="emotion-en"
                src="icon/emotion-en.png"
                style={{
                  height: "200px",
                  width: "340px",
                  position: "absolute",
                  right: "16%",
                  bottom: "30%",
                }}
              />
            ) : (
              <img
                alt="emotion"
                src="icon/emotion.png"
                style={{
                  height: "200px",
                  width: "280px",
                  position: "absolute",
                  right: "20%",
                  bottom: "30%",
                }}
              />
            )}
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
              marginRight: "10%",
              marginTop: "10%",
            }}
          >
            {engMode ? (
              <div style={{ marginRight: "10%" }}>
                {/* <h3 style={{ color: "white" }}>Who is the member?</h3> */}
                <h1 style={{ marginTop: -10, color: "white" }}>
                  Unveil Profile Image
                </h1>
                <h1 style={{ marginTop: -20, color: "white" }}>
                  with Spending TING
                </h1>
              </div>
            ) : (
              <div style={{ marginRight: "10%" }}>
                <h3 style={{ color: "white" }}>
                  어떤 사람이 미팅하는지 궁금해!
                </h3>
                <h1 style={{ marginTop: -10, color: "white" }}>베일에 싸인</h1>
                <h1 style={{ marginTop: -20, color: "white" }}>
                  프로필 이미지 확인
                </h1>
              </div>
            )}
            <img
              src="icon/profile.png"
              alt="profile"
              style={{ width: "67%" }}
            />
          </div>
        </div>
      </div>
      <div className="container2">
        {engMode ? (
          <>
            <h1 style={{ color: "white" }}>Good Place for Good People</h1>
            <h3
              style={{
                textAlign: "center",
                marginTop: -10,
                color: "white",
                lineHeight: "30px",
              }}
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
