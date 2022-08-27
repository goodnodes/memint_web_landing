import { useState } from "react";
import "./Header.css";

function Header({ onClick, engMode, setEngMode }) {
  const [isHovering, setIsHovering] = useState("");
  return (
    <div className="container">
      <img
        src="icon/logo.png"
        style={{ marginLeft: "10%", height: "70%" }}
        alt="logo"
      />
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "10%",
        }}
      >
        <div className="box">
          <div
            onMouseOver={() => {
              setIsHovering("Explore");
            }}
            onMouseOut={() => {
              setIsHovering("");
            }}
            onClick={() => {
              onClick("Explore");
            }}
            style={{ cursor: "pointer" }}
          >
            <p
              style={
                isHovering === "Explore"
                  ? { color: "#AAEFC1", fontWeight: "600" }
                  : { color: "white", fontWeight: "600" }
              }
            >
              Explore
            </p>
          </div>
          <div
            onMouseOver={() => {
              setIsHovering("About");
            }}
            onMouseOut={() => {
              setIsHovering("");
            }}
            onClick={() => {
              onClick("About");
            }}
            style={{ cursor: "pointer" }}
          >
            <p
              style={
                isHovering === "About"
                  ? { color: "#AAEFC1", fontWeight: "600" }
                  : { color: "white", fontWeight: "600" }
              }
            >
              About
            </p>
          </div>
          <div
            onMouseOver={() => {
              setIsHovering("Roadmap");
            }}
            onMouseOut={() => {
              setIsHovering("");
            }}
            onClick={() => {
              onClick("Roadmap");
            }}
            style={{ cursor: "pointer" }}
          >
            <p
              style={
                isHovering === "Roadmap"
                  ? { color: "#AAEFC1", fontWeight: "600" }
                  : { color: "white", fontWeight: "600" }
              }
            >
              Roadmap
            </p>
          </div>
          <div
            onMouseOver={() => {
              setIsHovering("Marketplace");
            }}
            onMouseOut={() => {
              setIsHovering("");
            }}
            onClick={() => {
              onClick("Marketplace");
            }}
            style={{ cursor: "pointer" }}
          >
            <p
              style={
                isHovering === "Marketplace"
                  ? { color: "#AAEFC1", fontWeight: "600" }
                  : { color: "white", fontWeight: "600" }
              }
            >
              Marketplace
            </p>
          </div>
          <div
            onMouseOver={() => {
              setIsHovering("Download");
            }}
            onMouseOut={() => {
              setIsHovering("");
            }}
            onClick={() => {
              onClick("Download");
            }}
            style={{ cursor: "pointer" }}
          >
            <p
              style={
                isHovering === "Download"
                  ? { color: "#AAEFC1", fontWeight: "600" }
                  : { color: "white", fontWeight: "600" }
              }
            >
              Download
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          paddingRight: "10%",
          color: "white",
          fontWeight: "700",
          cursor: "pointer",
        }}
        onClick={() => {
          setEngMode(!engMode);
        }}
      >
        {engMode ? "ENG" : "KOR"}
      </p>
    </div>
  );
}

export default Header;
