import React from 'react'
import experience from "./data/experience.json";
import image1 from '../assets/company-20241009T174415Z-001/company/google.png';
import image2 from '../assets/company-20241009T174415Z-001/company/microsoft.png';
import image3 from "../assets/company-20241009T174415Z-001/company/netflix.png";
// Import other images as needed

const imageMap = {
  'image1.jpg': image1,
  'image2.jpg': image2,
  'image3.jpg':image3,
  // Add other images here
};

function Experience() {
  return (
    <div className='container ex' id='experience'>
        <h1>Experience</h1>
      {experience.map((data)=>{
        return (
            <>
            <div key={data.id} className='ex-items text-center my-5' data-aos="zoom-in" data-aos-duration="1000">
            <div className='left'>
            <img src={imageMap[data.imageSrc]} alt={data.role} />
            </div>
            <div className="right">
                <h2>{data.role}</h2>
                <h4 style={{color:"yellow"}}>{data.startDate}{data.endDate} {data.location}</h4>
                <h5 style={{color:"yellow"}}>{data.experiences[0]}</h5>
                <h5 style={{color:"yellow"}}>{data.experiences[1]}</h5>
            </div>
            </div>
            </>
        )
      })}
    </div>
  )
}

export default Experience
