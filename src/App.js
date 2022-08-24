import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const outerDivRef = useRef();
  const pageHeight = window.innerHeight;
  const handlePageMove = (text) => {
    if (text === "Explore") {
      outerDivRef.current.scrollTo({
        top: 0,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "About") {
      outerDivRef.current.scrollTo({
        top: pageHeight,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Roadmap") {
      outerDivRef.current.scrollTo({
        top: pageHeight * 2,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Marketplace") {
      outerDivRef.current.scrollTo({
        top: pageHeight * 3,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Download") {
      outerDivRef.current.scrollTo({
        top: pageHeight * 4,
        legt: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div ref={outerDivRef} className="outer">
      <Header onClick={handlePageMove} />
      <div className="inner intro">
        <p>Intro page</p>
      </div>
      <div className="inner about">
        <p>About page</p>
      </div>
      <div className="inner roadmap">
        <p>Roadmap page</p>
      </div>
      <div className="inner marketplace">
        <p>Marketplace page</p>
      </div>
      <div className="inner download">
        <p>Download page</p>
      </div>
    </div>
  );
}

export default App;
