import React, { useEffect, useState } from 'react'
//import Banner from '../components/Banner'
//import LandingPage from '../components/LandingPage'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'
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

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  useEffect(()=>{
    setProducts(data.data)
  },[data])
  return (
    <div>
      <LandingPage />
      <Products products={products} />  
    </div>
  )
}

export default Home