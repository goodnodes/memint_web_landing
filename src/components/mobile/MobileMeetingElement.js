import React from "react";
import { handleBirth, handleDateInFormat } from "../../assets/Functions";

function MobileMeetingElement({ meeting }) {
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

export default MobileMeetingElement;
