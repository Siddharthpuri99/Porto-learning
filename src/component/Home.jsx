import React, { useEffect } from 'react'
import Pdf from "./pdf/MY_CV.pdf";
import Hero from "../assets/hero-20241009T174434Z-001/hero/hero.avif"
import Typed from "typed.js"
import { useRef } from 'react';

function Home() {
    const typedRef = useRef(null);
    useEffect(()=>{
        const options = {
            strings: ["Welcome to my profile","My name is Siddharth Puri","I am full stack Developer"],
            typeSpeed:50,
            backSpeed:50,
            loop:true
        }
        const typed = new Typed(typedRef.current,options);
        return()=>{
            typed.destroy();
        }
    },[]);
  return (
    <div className='container home' id='home'>
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
            <h1 ref={typedRef}>Lorem ipsum dolor sit amet, consectetur </h1>
            <a href={Pdf} download="MY_CV" className='btn btn-outline-warning my-3'>Download Resume</a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
            <div className="img">
                <img  src={Hero} alt='....'/>
            </div>
        </div>
      
    </div>
  )
}

export default Home
