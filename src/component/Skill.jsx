import React from "react";
import image1 from "../assets/skills-20241009T174449Z-001/skills/html.png"
import image2 from "../assets/skills-20241009T174449Z-001/skills/css.png"
import image3 from "../assets/skills-20241009T174449Z-001/skills/javascript.png"
import image4 from "../assets/skills-20241009T174449Z-001/skills/node.png"
import image5 from "../assets/skills-20241009T174449Z-001/skills/react.png"
import image6 from "../assets/skills-20241009T174449Z-001/skills/mongodb.png"
import image7 from "../assets/skills-20241009T174449Z-001/skills/graphql.png"
import image8 from "../assets/skills-20241009T174449Z-001/skills/figma.png"
import image9 from "../assets/skills-20241009T174449Z-001/skills/firebase.png"
import skills from "../component/data/skills.json";
const imageMap = {
    'image1.jpg': image1,
    'image2.jpg': image2,
    'image3.jpg':image3,
    'image4.jpg':image4,
    'image5.jpg':image5,
    'image6.jpg':image6,
    'image7.jpg':image7,
    'image8.jpg':image8,
    'image9.jpg':image9,
    // Add other images here
  };
  

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duartion="1000"
              >
                 <img src={imageMap[data.imageSrc]} alt=".." />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;