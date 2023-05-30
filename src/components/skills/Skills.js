import { useState, useEffect } from "react";
import "./skills.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";

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

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
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
            Below you could scroll through an estimate of some of the technical skills that I
            have acquired over the past several years.
          </p>
        </div>
        <Slider {...settings}>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Web Development</h3>
            <img />
          </div>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Back End</h3>
            <img />
          </div>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Front End</h3>
            <img />
          </div>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Software Testing</h3>
            <img />
          </div>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Algorithms and Data Structures</h3>
            <img />
          </div>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Object Oriented Programming</h3>
            <img />
          </div>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Databases</h3>
            <img />
          </div>
          <div className="skill">
            <img src={meter2} alt="image" />
            <h3>Software Architectures and Design Patterns</h3>
            <img />
          </div>
        </Slider>
      </div>
    </section>
  );
};
