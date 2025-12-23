import {react} from 'react'
import Navbar from './Component/NavBar/NavBar'
import Hero from './Component/HeroSection/herosection'
import Services from './Component/Services/services'
import CreativeDesigns from './Component/Designs/Designs'
import About from './Component/About/About'
import FAQ from './Component/Faqs/Faqs'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

import { ThemeProvider } from './context/ThemeContext'

function App() {


  return (
    <>
    <ThemeProvider>
      <Navbar/>
      <Hero/>
      <Services/>
      <CreativeDesigns/>
      <About/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App
