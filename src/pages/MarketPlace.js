// import axios from "axios";
import { useState } from "react";
import { handleBirth, handleDateInFormat } from "../assets/Functions";
import "./MarketPlace.scss";

function MarketPlace({ engMode, marketRef }) {
  // const pageHeight = window.innerHeight;
  // useEffect(() => {
  //   console.log(pageHeight);
  // }, []);
  // eslint-disable-next-line no-unused-vars
  const [meetings, setMeetings] = useState([
    {
      meetingInfo: {
        title: "혜화에서 같이 연극 보실 분!",
        peopleNum: 1,
        meetingTags: ["연애", "취미"],
        region: "혜화",
        meetDate: "2022-09-09T18:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com/v0/b/memint-c2130.appspot.com/o/Memin%2F71.png?alt=media&token=2cb7623e-352a-47ad-baaf-91e6d42637c3",
        nickName: "엽떡매니아",
        age: "1999년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "🔥🔥불금 불태우실 분들🔥🔥",
        peopleNum: 3,
        meetingTags: ["음악", "와인"],
        region: "홍대",
        meetDate: "2022-09-10T19:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com/v0/b/memint-c2130.appspot.com/o/Memin%2F102.png?alt=media&token=877b75c7-a79b-473a-8a5e-c987fc33ff5a",
        nickName: "홍대마녀",
        age: "1991년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title:
          "기러기 토마토🍅 스위스 인도인 별동별 역삼역..❓ 에서 미팅할 사람!",
        peopleNum: 2,
        meetingTags: ["부어라 마셔라", "소맥"],
        region: "강남",
        meetDate: "2022-09-20T18:00:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com/v0/b/memint-c2130.appspot.com/o/Memin%2F114.png?alt=media&token=9b36610c-ea3e-4f20-91dd-72a8ca09feb6",
        nickName: "우투더영투더우",
        age: "1992년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "👀첫차 뜰 때까지 놀자!!",
        peopleNum: 2,
        meetingTags: ["술게임 환영", "연애"],
        region: "종로",
        meetDate: "2022-09-05T20:00:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com/v0/b/memint-c2130.appspot.com/o/Memin%2F111.png?alt=media&token=484a2ac4-4b77-4207-8c7c-9fb4b6e84e3f",
        nickName: "통금오전9시",
        age: "1997년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "20대 직장인입니다! 좋은 인연 만들어요😍😍",
        peopleNum: 2,
        meetingTags: ["소맥", "취미", "연애"],
        region: "강남",
        meetDate: "2022-09-21T19:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com/v0/b/memint-c2130.appspot.com/o/Memin%2F11.png?alt=media&token=310e7cd6-b4cb-46ba-80ba-88edb9adfac8",
        nickName: "금퇼",
        age: "1995년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "🍺힙지로에서 힙하게 놀 사람🍻",
        peopleNum: 4,
        meetingTags: ["부어라 마셔라", "소맥"],
        region: "종로",
        meetDate: "2022-09-18T20:00:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com/v0/b/memint-c2130.appspot.com/o/Memin%2F100.png?alt=media&token=836050bf-fc48-46a1-85eb-7386e0108276",
        nickName: "을지로힙스터",
        age: "1990년 7월 7일",
      },
    },
  ]);
  // useEffect(() => {
  //   axios.get("http://localhost:5000/web").then((el) => {
  //     console.log(el.data.data);
  //     setMeetings(el.data.data);
  //   });
  // }, []);
  return (
    <div className="Marketplace" ref={marketRef}>
      {engMode ? (
        <h1 style={{ color: "white" }}>Explore Group Meeting</h1>
      ) : (
        <h1 style={{ color: "white" }}>지금 난리 난 인기 미팅</h1>
      )}
      <div className="meetingmetas">
        {meetings && meetings.map((el, idx) => {
          return <Box key={idx} meeting={el} />
        })}
        {/* {meetings && <Meetingmeta data={meetings.slice(0, 3)} />}
        {meetings && <Meetingmeta data={meetings.slice(3)} />} */}
      </div>
      <img
        src="icon/exclamationmark.png"
        alt="exclamationmark"
        style={{ height: "12%", position: "absolute", right: 19, top: 0 }}
      />
      <h3>SEE MORE</h3>
    </div>
  );
}

function Box({ meeting }) {
  return (
<div className="wrapper">
      <div className="card">
        <div className="user">
          <img src={meeting.hostInfo.profile} alt="host" />
          <span>{meeting.hostInfo.nickName}</span>
        </div>
        <div className="meetingTitle">{meeting.meetingInfo.title} </div>
        <div className="meetingInfo">
          <span>{meeting.meetingInfo.region} |&nbsp;</span>
          <span>
            {meeting.meetingInfo.peopleNum}:{meeting.meetingInfo.peopleNum} |&nbsp;
          </span>
          <span>{handleBirth(meeting.hostInfo.age)} |&nbsp;</span>
          <span>{handleDateInFormat(meeting.meetingInfo.meetDate)}</span>
        </div>
        <div className="meetingTags">
          <span>
            {meeting.meetingInfo.meetingTags?.reduce((acc, cur) => {
              if (acc.length > 24) {
                return acc;
              }
              return acc + "#" + cur + " ";
            }, "")}
          </span>
        </div>
      </div>
      <button>
        <span>함께하기</span>
        <img src="icon/triangle.png" alt="play" />
      </button>
    </div>
  );
}

export default MarketPlace;
