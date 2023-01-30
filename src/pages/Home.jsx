import React from 'react'
import Navbar from "../components/Navbar"
import Announcements from '../components/Announcements'
import Slider from '../components/Slider';
import Categories from '../components/Category';
import Footer from "../components/Footer";
import Categories1 from '../components/Categories1';
import Products from '../components/Products';
import "./Home.css"

const Home = () => {
  return (
    <div> 
        <Announcements/>
        {/* Same as writing div classname="containter" */}
        <Navbar/>
        <Slider/>
        <Categories/>
        <Categories1/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home