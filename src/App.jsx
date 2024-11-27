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



function App() {
  return (
    <>

<NavbarArea />
<main>
  <Hero />
  <Partner />
</main>

    </>
  )
}

export default App