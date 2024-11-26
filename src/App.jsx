import React from 'react'
import NavbarArea from './components/NavbarArea';
import Hero from "./components/Hero"
import Partner from './components/Partner';
function App() {
  return (
    <>
    
    <NavbarArea />
    <main className='mb-[200px]'>
      <Hero />
      <Partner />
      
    </main> 
    </>
  )
}

export default App