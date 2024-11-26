import React from 'react'
import NavbarArea from './components/NavbarArea';
import Hero from "./components/Hero"
import Partner from './components/Partner';
import Service from './components/service/Service';
import GetStarted from './components/GetStarted';
function App() {
  return (
    <>
    
    <NavbarArea />
    <main className='mb-[200px]'>
      <Hero />
      <Partner />
      <Service />
      <GetStarted />
      
    </main> 
    </>
  )
}

export default App