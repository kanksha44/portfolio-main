import React from "react";
import "./UIProjects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFastapi,
  SiRedux,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import tindog from "../../assets/tindog.png";
import kanbanproj from "../../assets/kanbanproj.png";
import quizapp from "../../assets/quizapp.png"
import petside from "../../assets/petside.png";
import Foodapp from "../../assets/Foodapp.png";
import canopy from "../../assets/canopy.png";
import safar from "../../assets/safar.mov"
import rest from "../../assets/rest-o-rant.png"
export const UIProjects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">UI Projects</h2>
        <h5 className="section__title different">
          This are the UI small projects I made during my Learning phase
        </h5>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={tindog} alt="Netflix clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>tinDog</h2>
                <p>Buy Pets platform.</p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiJavascript />
                  <DiCss3 />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://tindog-cute-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/netflix.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <video width={400} autoPlay muted>
                    <source src={safar} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="project_information">
                <h2>Safar</h2>
                <p>Website to book & manage your travel.</p>
                <div>
                  <SiJavascript />
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://safar-tours-travels.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/kanban-board-project-2.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={petside} alt="Petside" />
                </div>
              </div>
              <div className="project_information">
                <h2>Petside</h2>
                <p>
                Food & Fun for Smart Pets.
                </p>
                <div>
                  <FaReact />
                  <SiJavascript />
                  <DiCss3 />
                  <SiMaterialui />
                  <SiRedux />
                </div>
                <div>
                  <a
                    href="https://whimsical-sunflower-2900d5.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/Petside"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Foodapp} alt="Google Docs Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Food App</h2>
                <p>
                  Food App
                </p>
                <div>
                  <FaReact />
                  <SiJavascript />

                  <DiCss3 />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://courageous-phoenix-41cefd.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/Bootstrap-food"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={quizapp} alt="Movie app" />
                </div>
              </div>
              <div className="project_information">
                <h2>Quiz App</h2>
                <p>
                  Quiz app
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <DiCss3 />
                  <SiJavascript />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://funny-donut-f8f0e8.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/movie-app-redux-thunk.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={canopy} alt="petcare" />
                </div>
              </div>
              <div className="project_information">
                <h2>Canopy</h2>
                <p>
                  Ecom
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiMongodb />
                  <SiNodedotjs />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href="https://canopy-html-css.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/canopy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={rest} alt="rest" />
                </div>
              </div>
              <div className="project_information">
                <h2>Rest-o-rant</h2>
                <p>
                  Restaurant page.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiMongodb />
                  <SiNodedotjs />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href="https://react-rest-o-rant.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/kanksha44/canopy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
