import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ onClick, engMode, setEngMode }) {
  const [isHovering, setIsHovering] = useState("");
  return (
    <div className="Header">
      <Link to="/">
        <img src="icon/logo.png" alt="logo" />
      </Link>

      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "10%",
        }}
      >
        <div className="box">
          <Link to="/">
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
          </Link>

          <Link to="/">
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
          </Link>

          <Link to="/">
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
          </Link>

          <Link to="/">
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
          </Link>

          <Link to="/">
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
          </Link>

          <Link to="closed-beta">
            <div
              onMouseOver={() => {
                setIsHovering("ClosedBeta");
              }}
              onMouseOut={() => {
                setIsHovering("");
              }}
              onClick={() => {
                onClick("ClosedBeta");
              }}
              id="closed-beta-button"
              style={
                isHovering === "ClosedBeta"
                  ? { backgroundColor: "#3C3D43" }
                  : null
              }
            >
              <p
                style={
                  isHovering === "ClosedBeta"
                    ? {
                        color: "#AEFFC1",
                        fontWeight: "600",
                      }
                    : { color: "#3C3D43", fontWeight: "600" }
                }
              >
                ClosedBeta
              </p>
            </div>
          </Link>
        </div>
      </div>
      <p
        style={{
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
