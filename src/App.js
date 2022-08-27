import { useEffect, useRef, useState } from "react";
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
  const [engMode, setEngMode] = useState(false);
  const outerDivRef = useRef();
  const aboutRef = useRef();
  const roadmapRef = useRef();
  const marketplaceRef = useRef();
  const downloadRef = useRef();

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
  useEffect(() => {
    console.log(outerDivRef);
    console.log(aboutRef);
    console.log(roadmapRef);
  }, []);
  return (
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
  );
}

export default App;
