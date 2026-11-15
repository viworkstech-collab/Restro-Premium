import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './Layout/HeroSection';
import About from './Layout/About';
import Stats from './Layout/Stats';
import Dishes from './Layout/Dishes';
import  Features from './Layout/Features'
import  Timining from './Layout/Timining'
import BookingProcess from './Layout/BookingProcess';
import TestimonialSection from './Layout/TestimonialSection';
import FAQs from './Layout/FAQs';
import CTA from './Layout/CTA';
import Footer from './components/Footer';
import LenisScroll from './components/LeniesScroll'

const App = () => {
  return (
    <>
    <LenisScroll />
    <Navbar />
    <HeroSection />
    <About />
    <Stats/>
    <Dishes />
    <Features />
    <BookingProcess />
    <Timining />
    <TestimonialSection />
    <FAQs />
    <CTA /> 
    <Footer />
</>
  )
}

export default App