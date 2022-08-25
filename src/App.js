import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Explore from "./pages/Explore";
import About from "./pages/About";
import About2 from "./pages/About2";
import Roadmap from "./pages/Roadmap";
import MarketPlace from "./pages/MarketPlace";
import Download from "./pages/Download";
import Footer from "./components/Footer";
import background from "./assets/background.png";

function App() {
  const outerDivRef = useRef();
  const pageHeight = window.innerHeight;
  const aboutHeight = 1.6 * pageHeight;
  const roadmapHeight = aboutHeight + 3.47 * pageHeight;
  const marketHeight = roadmapHeight + 1.1 * pageHeight;
  const downloadHeight = marketHeight + pageHeight;
  const handlePageMove = (text) => {
    if (text === "Explore") {
      outerDivRef.current.scrollTo({
        top: 0,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "About") {
      outerDivRef.current.scrollTo({
        top: aboutHeight,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Roadmap") {
      outerDivRef.current.scrollTo({
        top: roadmapHeight,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Marketplace") {
      outerDivRef.current.scrollTo({
        top: marketHeight,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Download") {
      outerDivRef.current.scrollTo({
        top: downloadHeight,
        legt: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      ref={outerDivRef}
      className="outer"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "local",
        backgroundSize: "cover",
        // overflow: "scroll",
      }}
    >
      <Header onClick={handlePageMove} />
      <div style={{ height: "9vh" }}></div>
      <Explore />
      <About />
      <About2 />
      <Roadmap />
      <MarketPlace />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
