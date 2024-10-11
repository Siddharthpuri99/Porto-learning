import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Experience from './component/Experience'
import Skills from './component/Skill'
import Projects from './component/Projects'
import Contact from './Contact'
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Home/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
