import React from 'react'
import bgVideo from '../video/bgVideo.mp4'

const LandingPage = () => {
  return (
    <div className="w-full h-auto overflow-x-hidden">
        <div className="w-screen relative">
        <video src={bgVideo} autoPlay muted loop class="video-bg" />
        </div>
    </div>
  )
}

export default LandingPage