import { useState, useEffect } from "react";
import "./skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webdev from "../../assets/img/test1.png";
import frontend from "../../assets/img/frontend.png";
import backend from "../../assets/img/backend.png";
import testing from "../../assets/img/testing.png";
import algorithm from "../../assets/img/algorithm.png";
import OOP from "../../assets/img/OOP.png";
import database from "../../assets/img/database.png";
import architecture from "../../assets/img/architecture.png";

export const Skills = () => {
  const [slidesToShow, setSlidesToShow] = useState(4); // Initial number of items to display

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4); // Adjust the number of items for screens wider than 1024px
      } else if (window.innerWidth >= 1000) {
        setSlidesToShow(3); // Adjust the number of items for screens wider than 768px
      } else if (window.innerWidth >= 700) {
        setSlidesToShow(2); // Adjust the number of items for screens wider than 480px
      } else {
        setSlidesToShow(1); // Adjust the number of items for smaller screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section className="skill-section" id="skills">
      <div className="skills">
        <div className="skill-description">
          <h1>Skills</h1>
          <p>
            Below you could scroll through an estimate of some of the technical
            skills that I have acquired over the past several years.
          </p>
        </div>
        <Slider {...settings}>
          <div className="skill">
            <img src={webdev} alt="webdev" />
            <h3>Web Development</h3>
          </div>
          <div className="skill">
            <img src={backend} alt="backend" />
            <h3>Back End</h3>
          </div>
          <div className="skill">
            <img src={frontend} alt="frontend" />
            <h3>Front End</h3>
            
          </div>
          <div className="skill">
            <img src={testing} alt="testing" />
            <h3>Software Testing</h3>
            
          </div>
          <div className="skill">
            <img src={algorithm} alt="algorithms" />
            <h3>Algorithms and Data Structures</h3>
            
          </div>
          <div className="skill">
            <img src={OOP} alt="OOP" />
            <h3>Object Oriented Programming</h3>
            
          </div>
          <div className="skill">
            <img src={database} alt="Databases" />
            <h3>Databases</h3>
            
          </div>
          <div className="skill">
            <img src={architecture} alt="Architecture" />
            <h3>Software Architectures and Design Patterns</h3>
            
          </div>
        </Slider>
      </div>
    </section>
  );
};
