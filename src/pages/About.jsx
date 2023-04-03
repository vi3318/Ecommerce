import React from 'react'
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import "./About.css"

const About = () => {
  return (

    <div>
        <Navbar/>
        <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>
        </div>

        <h2>Our Team</h2>
        <div class="row">
        <div class="column">
            <div class="card">
            <img src="/" alt="Vihaan" />
            <div class="container">
                <h2>Vihaan Dharia</h2>
                <p class="title">CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>vihaandharia04@example.com</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <img src="/" alt="Satvik"/>
            <div class="container">
                <h2>Satvik Sharma</h2>
                <p class="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>mike@example.com</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>

        <div class="column">
            <div class="card">
            <img src="/" alt="Binit"/>
            <div class="container">
                <h2>Binit Gudhka</h2>
                <p class="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button class="button">Contact</button></p>
            </div>
            </div>
        </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default About