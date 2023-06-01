import "./projects.css";
import { useState } from "react";
import project1 from '../../assets/img/project-1.png';
import project2 from '../../assets/img/project-2.png';
import project3 from '../../assets/img/project-3.png';
import project4 from '../../assets/img/project-4.png';
import project5 from '../../assets/img/project-5.png';
export const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className="projects" id="projects">
      <h2>
        {" "}
        <span className="project-title">Projects</span>
      </h2>
      <div className="project-tabs">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Project 1
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Project 2
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              Project 3
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 4 ? "active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              Project 4
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 5 ? "active" : ""}`}
              onClick={() => handleTabClick(5)}
            >
              Project 5
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content mt-3">
        <div className={`tab-pane ${activeTab === 1 ? "active" : ""}`}>
          <img className="project-image" src={project1} alt="project-1"/>
          <p>
            Made the backend of an Android carpool program by using the
            Express.js frameworks. This project required the usage of the
            firebase database and perforing optimized algoritms to complete
            multitudes of calculations.
          </p>
        </div>
        <div className={`tab-pane ${activeTab === 2 ? "active" : ""}`}>
        <img className="project-image" src={project2} alt="project-2"/>
          <p>
            Completed a fully responsive personal portfolio by using React
            components and the bootstrap library to modify designs. The design
            was completed by implementing designs from figma and being able to
            copy stylings from multitudes of sources.
          </p>
        </div>
        <div className={`tab-pane ${activeTab === 3 ? "active" : ""}`}>
        <img className="project-image" src={project3} alt="project-3"/>
          <p>
          Given a dataset of longitudes, latitudes and connecting train station,
          made a program that created a graph from the given nodes. Then by
          implementing multiple graph searching algoritms such as Dijkstra's and
          A*, their performences were benchmarked and the results were shared in
          a Jupyter report.
          </p>
        </div>
        <div className={`tab-pane ${activeTab === 4 ? "active" : ""}`}>
        <img className="project-image" src={project4} alt="project-4"/>
          <p>
          Created a python program that takes in normal python code and converts
          it to its corresponding assembly language in ARM-64 language. This
          program required knowledge in both assembly language and object
          oriented programming in python to ensure the accurate translation.
          </p>
        </div>
        <div className={`tab-pane ${activeTab === 5 ? "active" : ""}`}>
        <img className="project-image" src={project5} alt="project-5"/>
          <p>
          Created a google plugin by using knowledges in react and JavaScript to
          find the corresponding size of a brand for a shoe given a base size.
          The google plugin implements an API from another source to find the
          relative shoe size of brand compared to a default shoe brand.
          </p>
        </div>
      </div>
    </section>
  );
};
