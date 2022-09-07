import React from 'react'
import './MobileDownload.scss'

function MobileDownload({engMode}) {
  return (
    <div id='mobile_download'>
      <div className='download_title'>DOWNLOADS</div>
      <img src='icon/appstore.png' alt='appstore'/>
      <img src='icon/playstore.png' alt='playstore'/>
    </div>
  )
}

export default MobileDownload