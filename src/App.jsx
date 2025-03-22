import './App.css'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {DataCard} from './components/DataCard'
import {AboutUs} from './components/AboutUs'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { FAQs } from './components/FAQs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


function App() {

  return (
    <Box>
      <Navbar/>
      <Home/>
      <DataCard/>
      <AboutUs/>
      <Services/>
      <Features/>
      <Pricing/>
      <FAQs/>
      <Contact/>
      <Footer/>
    </Box>
  )
}

export default App
