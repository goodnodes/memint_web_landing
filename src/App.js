import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import MarketPlace from "./pages/MarketPlace";
import Download from "./pages/Download";

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
      <Explore />
      <About />
      <Roadmap />
      <MarketPlace />
      <Download />
    </div>
  );
}

export default App;
