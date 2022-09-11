import React from 'react'
import MobileAbout from './MobileAbout'
import MobileDownload from './MobileDownload'
import MobileExplore from './MobileExplore'
import MobileMarketPlace from './MobileMarketPlace'
import MobileRoadmap from './MobileRoadmap'

function MobileMain({engMode}) {
  return (
    <div>
                <MobileExplore engMode={engMode} />
          <MobileAbout engMode={engMode} />
          <MobileRoadmap engMode={engMode} />
          <MobileMarketPlace engMode={engMode} />
          <MobileDownload engMode={engMode} />
    </div>
  )
}

export default MobileMain