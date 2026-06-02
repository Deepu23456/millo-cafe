import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Menu />
    <Gallery />
    <Testimonials />
    <Reservation />
    <Footer />
    </>
  )
}

export default App
