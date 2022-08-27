import axios from "axios";
import { useState, useEffect } from "react";
import { handleDate, handleBirth } from "../assets/Functions";
import "./MarketPlace.css";

function MarketPlace({ engMode, marketRef }) {
  // const pageHeight = window.innerHeight;
  // useEffect(() => {
  //   console.log(pageHeight);
  // }, []);
  const [meetings, setMeetings] = useState([
    {
      meetingInfo: {
        title: "party 2nignt!",
        peopleNum: 2,
        meetingTags: ["have fun!", "soju"],
        region: "hongdae",
        meetDate: "March 9th",
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
        meetDate: "March 9th",
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
        meetDate: "March 9th",
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
        meetDate: "March 9th",
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
        meetDate: "March 9th",
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
        meetDate: "March 9th",
      },
      hostInfo: {
        profile:
          "https://firebasestorage.googleapis.com:443/v0/b/memint-c2130.appspot.com/o/NFTs%2Fdinosaur_nft_051.png?alt=media&token=b66f1a96-b0b0-4924-be1e-e99245b7070f",
        nickName: "Bob",
        age: "1992년 7월 7일",
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
      <div
        style={{
          width: "86%",
          height: "80%",
          display: "flex",
          flexDirection: "column ",
          alignItems: "center",
          position: "relative",
        }}
      >
        {engMode ? (
          <h1 style={{ color: "white" }}>Hot group datings!</h1>
        ) : (
          <h1 style={{ color: "white" }}>지금 난리 난 인기 미팅</h1>
        )}
        <div
          style={{
            width: "90%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {meetings && <Meetingmeta data={meetings.slice(0, 3)} />}
          {meetings && <Meetingmeta data={meetings.slice(3)} />}
        </div>
        <img
          src="icon/exclamationmark.png"
          alt="exclamationmark"
          style={{ height: "12%", position: "absolute", right: 19, top: 0 }}
        />
      </div>
      <h3
        style={{
          position: "absolute",
          bottom: "2%",
          color: "white",
          fontFamily: "mechanical-en",
        }}
      >
        SEE MORE
      </h3>
    </div>
  );
}

function Meetingmeta({ data }) {
  return (
    <div
      style={{
        width: "95%",
        height: "46%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box data={data[0]} />
      <Box data={data[1]} />
      <Box data={data[2]} />
    </div>
  );
}

function Box({ data }) {
  return (
    <div
      style={{
        width: "30%",
        height: "82%",
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#BBCCBF",
          borderRadius: "20px",
          width: "100%",
          height: "87%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flex: 1,
            marginTop: "27px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              alt="profile"
              src={data.hostInfo.profile}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: 15,
              }}
            />
            <p style={{ marginTop: 0, marginBottom: 0, marginLeft: "6px" }}>
              {data.hostInfo.nickName}
            </p>
          </div>
          <img src="icon/foot.png" alt="foot" />
        </div>
        <div style={{ height: "40px" }}>
          <p
            style={{
              marginBottom: 0,
              marginTop: 10,
              marginLeft: "15px",
              maxWidth: "70%",
              overflowWrap: "break-word",
              fontFamily: "mechanical",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            {data.meetingInfo.title}
          </p>
        </div>
        <p
          style={{
            marginLeft: "15px",
            marginTop: 0,
            marginBottom: 0,
            lineHeight: "18px",
            maxWidth: "90%",
            fontSize: "14px",
            color: "#3C3D43",
          }}
        >
          {data.meetingInfo.region} | {data.meetingInfo.peopleNum}:
          {data.meetingInfo.peopleNum} | {handleBirth(data.hostInfo.age)} |{" "}
          {data.meetingInfo.meetDate}
          <br />
          {data.meetingInfo.meetingTags.length > 0 &&
            data.meetingInfo.meetingTags.reduce((acc, cur) => {
              return `${acc} #${cur}`;
            }, [])}
        </p>
        {/* &nbsp; */}
      </div>
      <div
        style={{
          height: "21%",
          width: "30%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 10,
          right: "23px",
          borderRadius: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>함께하기</p>
        <img src="icon/triangle.png" style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default MarketPlace;
