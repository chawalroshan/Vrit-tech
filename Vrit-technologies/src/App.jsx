import React from 'react'
import './App.css'
import CardOne from './components/CardOne/CardOne'
import CardTwo from './components/CardTwo/CardTwo'
import Heading from './components/Heading/Heading'

function App() {
  

  return (
    <div className='bg-[#0333ad] h-[100vh]'>
      {/* <Heading/> */}
   <div className=''>
      <CardOne />
      </div>
  
    <CardTwo/>
    </div>
  )
}

export default App
