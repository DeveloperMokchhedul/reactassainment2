import React from 'react'
import NavbarArea from './components/NavbarArea';
import Hero from "./components/Hero"
import { Button } from '@nextui-org/button';
function App() {
  return (
    <>
    
    <NavbarArea />
    <main className='mb-[200px]'>
      <Hero />
      
    </main> 
    </>
  )
}

export default App