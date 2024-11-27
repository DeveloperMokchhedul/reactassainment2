import React from 'react'
import Hero from "./components/Hero"
import Partner from './components/Partner';
import Service from './components/service/Service';
import GetStarted from './components/GetStarted';
import Slider from "./components/Slider"
import TrainAidr from './components/TrainAidr';
import CountUpSection from './components/CountUpSection';
import Footer from './components/Footer';
import NavbarArea from "./components/NavbarArea"
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Pricing from './Pages/Pricing';
import Customers from './Pages/Customers';
import Solutions from './Pages/Solutions';



function App() {
  return (
    <>
<NavbarArea />
    <Routes>
      <Route path= '/'  element = {<AboutUs />} />
      <Route path= '/aboutus'  element = {<AboutUs />} />
      <Route path= '/pricing'  element = {<Pricing />} />
      <Route path= '/customers'  element = {<Customers  />} />
      <Route path= '/solutions'  element = {<Solutions  />} />
    </Routes>
<Footer />

    </>
  )
}

export default App