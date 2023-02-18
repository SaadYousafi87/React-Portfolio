import React from 'react';
import Project from "../components/project";
import { Link } from 'react-router-dom';
import proj1 from "../assets/weather-app.png";
import proj2 from "../assets/work-day-scheduler.png";
import proj3 from "../assets/timed-quiz.png";
import proj4 from "../assets/password-generator.png";
import proj5 from "../assets/code-refactor.png";
// import proj6 from "../assets/pet-adoption.png";


function Portfolio(){
    const projects = [
        {
            title: "Weather Dashboard",
            link: "https://saadyousafi87.github.io/Weather-Dashboard/",
            gitLink: "https://github.com/SaadYousafi87/Weather-Dashboard",
            img: (
              <Link to="https://saadyousafi87.github.io/Weather-Dashboard/" href="true">
                <img
                  className="project-screenshot"
                  src={proj1}
                  alt="Weather Dashboard"
                  width="100%"
                  border="20px"
                />
              </Link>
            ),
          },
          {
            title: "Work Day Scheduler",
            link: "https://saadyousafi87.github.io/Work-Day-Scheduler/",
            gitLink: "https://github.com/SaadYousafi87/Work-Day-Scheduler",
            img: (
              <Link to="https://saadyousafi87.github.io/Work-Day-Scheduler/" href="true">
                <img
                  className="project-screenshot"
                  src={proj2}
                  alt="Work Day Scheduler"
                  width="100%"
                  border="20px"
                />
              </Link>
            ),
          },
          {
            title: "Timed Quiz",
            link: "https://saadyousafi87.github.io/Timed-Quiz/",
            gitLink: "https://github.com/SaadYousafi87/Timed-Quiz",
      
            img: (
              <Link to="https://saadyousafi87.github.io/Timed-Quiz/" href="true">
                <img
                  className="project-screenshot"
                  src={proj3}
                  alt="Timed Quiz"
                  width="100%"
                  border="20px"
                />
              </Link>
            ),
            
          },
          {
            title: "Password Generator",
            link: "https://saadyousafi87.github.io/Password-Generator/",
            gitLink: "https://github.com/SaadYousafi87/Password-Generator",
            img: (
              <Link to="https://saadyousafi87.github.io/Password-Generator/" href="true">
                <img
                  className="project-screenshot"
                  src={proj4}
                  alt="Password Generator"
                  width="100%"
                  border="20px"
                />
              </Link>
            ),
            
          },
          {
            title: "Code Refactor",
            link: "https://saadyousafi87.github.io/code_refactor/",
            gitLink: "https://github.com/SaadYousafi87/code_refactor",
            img: (
              <Link to="https://saadyousafi87.github.io/code_refactor/" href="true">
                <img
                  className="project-screenshot"
                  src={proj5}
                  alt="code refactor"
                  width="100%"
                  border="20px"
                />
              </Link>
            ),
            
          },
          // {
          //   title: "Study guide",
          //   link: "https://eliasallan.github.io/Study-guide/",
          //   gitLink: "https://github.com/EliasAllan/Study-guide",
          //   img: (
          //     <Link to="https://eliasallan.github.io/Study-guide/" href="true">
          //       <img
          //         className="project-screenshot"
          //         src={studyGuideSc}
          //         alt="study-guide-screenshot"
          //         width="100%"
          //         border="20px"
             
          //       />
          //     </Link>
          //   ),
            
          // },
    ]

    return (
        <div className='container'>
            {projects.map((project, index) => (
                <Project key={index} props={project} />
            ))}
        </div>
    );
}

export default Portfolio;