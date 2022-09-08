import { useRef, useState } from "react";
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
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./components/mobile/MobileHeader";
import MobileExplore from "./pages/mobile/MobileExplore";
import MobileAbout from "./pages/mobile/MobileAbout";
import MobileRoadmap from "./pages/mobile/MobileRoadmap";
import MobileMarketPlace from "./pages/mobile/MobileMarketPlace";
import MobileDownload from "./pages/mobile/MobileDownload";

function App() {
  const [engMode, setEngMode] = useState(true);
  const outerDivRef = useRef();
  const aboutRef = useRef();
  const roadmapRef = useRef();
  const marketplaceRef = useRef();
  const downloadRef = useRef();

    const isMobileTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const handlePageMove = (text) => {
    if (text === "Explore") {
      outerDivRef.current.scrollTo({
        top: 0,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "About") {
      outerDivRef.current.scrollTo({
        top: aboutRef.current.offsetTop - 100,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Roadmap") {
      outerDivRef.current.scrollTo({
        top: roadmapRef.current.offsetTop,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Marketplace") {
      outerDivRef.current.scrollTo({
        top: marketplaceRef.current.offsetTop,
        legt: 0,
        behavior: "smooth",
      });
    } else if (text === "Download") {
      outerDivRef.current.scrollTo({
        top: downloadRef.current.offsetTop,
        legt: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      {isMobile || isMobileTablet ? (
        <div className="mobile_wrapper">
          <MobileHeader setEngMode={setEngMode} engMode={engMode} />
          <div className="safe_header" />
          <MobileExplore engMode={engMode} />
          <MobileAbout engMode={engMode} />
          <MobileRoadmap engMode={engMode} />
          <MobileMarketPlace engMode={engMode} />
          <MobileDownload engMode={engMode} />
          <Footer />
        </div>
      ) : (
        <div
          ref={outerDivRef}
          className="outer"
          style={{
            backgroundImage: `url(${background})`,
            backgroundAttachment: "local",
            backgroundSize: "cover",
          }}
        >
          <Header
            onClick={handlePageMove}
            setEngMode={setEngMode}
            engMode={engMode}
          />
          <div style={{ height: "9vh" }}></div>
          <Explore engMode={engMode} />
          <About aboutRef={aboutRef} engMode={engMode} />
          <About2 engMode={engMode} />
          <Roadmap roadmapRef={roadmapRef} engMode={engMode} />
          <MarketPlace marketRef={marketplaceRef} engMode={engMode} />
          <Download downloadRef={downloadRef} engMode={engMode} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
