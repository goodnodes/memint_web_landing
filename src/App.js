import { useRef, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "./components/mobile/MobileHeader";
import MobileClosedBeta from "./pages/mobile/MobileClosedBeta";
import ClosedBeta from "./pages/ClosedBeta";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MobileMain from "./pages/mobile/MobileMain";

function App({route}) {
  const [engMode, setEngMode] = useState(true);
  const outerDivRef = useRef();
  const aboutRef = useRef();
  const roadmapRef = useRef();
  const marketplaceRef = useRef();
  const downloadRef = useRef();
  const isMobile = useMediaQuery({
    query: "(max-width: 512px)",
  });

  const handlePageMove = (text) => {
    if (text === "Explore") {
      outerDivRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else if (text === "About") {
      outerDivRef.current.scrollTo({
        top: aboutRef.current.offsetTop - 100,
        left: 0,
        behavior: "smooth",
      });
    } else if (text === "Roadmap") {
      outerDivRef.current.scrollTo({
        top: roadmapRef.current.offsetTop-100,
        left: 0,
        behavior: "smooth",
      });
    } else if (text === "Marketplace") {
      outerDivRef.current.scrollTo({
        top: marketplaceRef.current.offsetTop-100,
        left: 0,
        behavior: "smooth",
      });
    } else if (text === "Download") {
      outerDivRef.current.scrollTo({
        top: downloadRef.current.offsetTop-100,
        legt: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {isMobile ? (
        <div className="mobile_wrapper">
          <MobileHeader setEngMode={setEngMode} engMode={engMode} />
          <div className="safe_header" />
          <Routes>
            <Route path="/" element={<MobileMain engMode={engMode} />} />
            <Route
              path="closed-beta"
              element={<MobileClosedBeta engMode={engMode} />}
            />
          </Routes>

          <Footer />
        </div>
      ) : (
        <div ref={outerDivRef} className="outer">
          <Header
            onClick={handlePageMove}
            setEngMode={setEngMode}
            engMode={engMode}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  engMode={engMode}
                  aboutRef={aboutRef}
                  roadmapRef={roadmapRef}
                  marketplaceRef={marketplaceRef}
                  downloadRef={downloadRef}
                />
              }
            />
            <Route path="closed-beta" element={<ClosedBeta />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
