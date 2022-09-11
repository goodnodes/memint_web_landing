import React from "react";
import About from "./About";
import About2 from "./About2";
import Download from "./Download";
import Explore from "./Explore";
import MarketPlace from "./MarketPlace";
import Roadmap from "./Roadmap";

function Home({ engMode, aboutRef, roadmapRef, marketplaceRef, downloadRef }) {
  return (
    <div>
      <Explore engMode={engMode} />
      <About aboutRef={aboutRef} engMode={engMode} />
      <About2 engMode={engMode} />
      <Roadmap roadmapRef={roadmapRef} engMode={engMode} />
      <MarketPlace marketRef={marketplaceRef} engMode={engMode} />
      <Download downloadRef={downloadRef} engMode={engMode} />
    </div>
  );
}

export default Home;
