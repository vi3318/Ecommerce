import React from 'react'
import Navbar from "../components/Navbar"
import Announcements from '../components/Announcements'
import Slider from '../components/Slider';
import Services from '../components/Services';
import Categories from '../components/Category';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div> 
        <Announcements/>
        {/* Same as writing div classname="containter" */}
        <Navbar/>
        <Slider/>
        <Categories/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default Home