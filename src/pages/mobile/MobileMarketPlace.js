import axios from "axios";
import React, { useEffect, useState } from "react";
import MobileMeetingElement from "../../components/mobile/MobileMeetingElement";
import "./MobileMarketPlace.scss";

function MobileMarketPlace({ engMode }) {
  const dummy = [
    {
      meetingInfo: {
        title: "party 2nignt!",
        peopleNum: 2,
        meetingTags: ["have fun!", "soju"],
        region: "hongdae",
        meetDate: "2022-09-05T18:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com:443/v0/b/memint-c2130.appspot.com/o/NFTs%2Fdinosaur_nft_051.png?alt=media&token=b66f1a96-b0b0-4924-be1e-e99245b7070f",
        nickName: "Bob",
        age: "1992년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "party 2nignt!",
        peopleNum: 2,
        meetingTags: ["have fun!", "soju"],
        region: "hongdae",
        meetDate: "2022-09-05T18:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com:443/v0/b/memint-c2130.appspot.com/o/NFTs%2Fdinosaur_nft_051.png?alt=media&token=b66f1a96-b0b0-4924-be1e-e99245b7070f",
        nickName: "Bob",
        age: "1992년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "party 2nignt!",
        peopleNum: 2,
        meetingTags: ["have fun!", "soju"],
        region: "hongdae",
        meetDate: "2022-09-05T18:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com:443/v0/b/memint-c2130.appspot.com/o/NFTs%2Fdinosaur_nft_051.png?alt=media&token=b66f1a96-b0b0-4924-be1e-e99245b7070f",
        nickName: "Bob",
        age: "1992년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "party 2nignt!",
        peopleNum: 2,
        meetingTags: ["have fun!", "soju"],
        region: "hongdae",
        meetDate: "2022-09-05T18:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com:443/v0/b/memint-c2130.appspot.com/o/NFTs%2Fdinosaur_nft_051.png?alt=media&token=b66f1a96-b0b0-4924-be1e-e99245b7070f",
        nickName: "Bob",
        age: "1992년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "party 2nignt!",
        peopleNum: 2,
        meetingTags: ["have fun!", "soju"],
        region: "hongdae",
        meetDate: "2022-09-05T18:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com:443/v0/b/memint-c2130.appspot.com/o/NFTs%2Fdinosaur_nft_051.png?alt=media&token=b66f1a96-b0b0-4924-be1e-e99245b7070f",
        nickName: "Bob",
        age: "1992년 7월 7일",
      },
    },
    {
      meetingInfo: {
        title: "party 2nignt!",
        peopleNum: 2,
        meetingTags: ["have fun!", "soju"],
        region: "hongdae",
        meetDate: "2022-09-05T18:30:00.000Z",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com:443/v0/b/memint-c2130.appspot.com/o/NFTs%2Fdinosaur_nft_051.png?alt=media&token=b66f1a96-b0b0-4924-be1e-e99245b7070f",
        nickName: "Bob",
        age: "1992년 7월 7일",
      },
    },
  ];
  const [meetings, setMeetings] = useState(dummy);

  useEffect(() => {
    axios.get("https://memint-app-server.herokuapp.com/web").then((el) => {
      console.log(el.data.data);
      setMeetings(el.data.data);
    });
  }, []);

  return (
    <div id="mobile_marketplace">
      <h1>{engMode ? "Explore Group Meeting" : "지금 난리 난 인기 미팅"}</h1>
      <div className="meetinglist">
        {meetings.map((el, idx) => {
          return <MobileMeetingElement key={idx} meeting={el} />;
        })}
      </div>
      <div className="see_more">SEE MORE</div>
    </div>
  );
}

export default MobileMarketPlace;
