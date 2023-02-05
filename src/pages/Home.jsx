import React from 'react'
import Navbar from "../components/Navbar";
import Announcements from '../components/Announcements'
import Slider from '../components/Slider';
import Categories from '../components/Category';
import Featured from '../components/Featured';
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter"
import Categories1 from '../components/Categories1';
import Products from '../components/Products';
import Services from '../components/Services';
import "./Home.css"

const Home = () => {
  return (
    <div> 
        <Announcements/>
        {/* Same as writing div classname="containter" */}
        <Navbar/>
        <Slider/>
        <Categories/>
        <Services/>
        <Categories1/>
        <Featured/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home