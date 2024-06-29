import { Container } from "react-bootstrap"
import logo from "../../assets/Images/About.png"
import resume from "../../assets/CV/Resume.pdf"

import bootstrapImg from "../../assets/Images/bootstrap.png"
import htmlImg from "../../assets/Images/html.png"
import cssImg from "../../assets/Images/css.png"
import jsImg from "../../assets/Images/javascript.png"
import reactImg from "../../assets/Images/react.png"
import reduxImg from "../../assets/Images/redux-logo.png"
import jqueryImg from "../../assets/Images/jquery.png"
import tsImg from "../../assets/Images/ts.png"

const About = () => {
  return (
    <section className="about" id="about">
        <Container>
            <h2 className="special-heading">About</h2>
            <p>Less is more work</p>
            <div className="text-white introductionContainer">
                <h5>INTRODUCTION</h5>
                <h3>Overview.</h3>
                <p>Seeking a position in the software development field that offers a challenging environment
                   where I can improve my skills and participate in achieving organizational excellence by
                   applying what I learned through my practical experience in my education journey.
                </p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="mainCard w-50">
                  <img src={logo} alt="" className="w-100" />
              </div>
              <h2 className="text-white fw-bolder">Front-End Developer</h2>
              <div className="mainSkills">
                  <h3>My Skills</h3>
                  <div className="mainSkillsImages row justify-content-center">
                      <div className="skill col-md-4 col-sm-6">
                        <div>
                            <img src={htmlImg} alt="skillLogo" />
                        </div>
                      </div>
                      <div className="skill col-md-4 col-sm-6">
                        <div>
                        <img src={cssImg} alt="skillLogo" className="cssImage"/>
                        </div>
                        
                      </div>
                      <div className="skill col-md-4 col-sm-6">
                        <div >
                            <img src={jsImg} alt="skillLogo" />
                        </div>
                       
                      </div>
                      <div className="skill col-md-4 col-sm-6 ">
                        <div>
                            <img src={bootstrapImg} alt="skillLogo" />
                        </div>  
                      </div>
                      <div className="skill col-md-4 col-sm-6">    
                        <div className="reactCircle">
                        <img src={reactImg}  alt="skillLogo" className="reactImage" />  
                        </div>
                        
                      </div>
                      <div className="skill col-md-4 col-sm-6">
                        <div>
                        <img src={reduxImg} alt="skillLogo" />
                        </div>
                       
                      </div>
                      <div className="skill col-md-4 col-sm-6">
                        <div>
                        <img src={jqueryImg} alt="skillLogo" />
                        </div>
                        
                      </div>
                      <div className="skill col-md-4 col-sm-6">
                        <div>
                        <img src={tsImg} alt="skillLogo" />
                        </div>
                        
                      </div>
                  </div>
              </div>
              <button className="btn btn-danger border-0 mt-5 py-3">
                  <a className="text-decoration-none text-black fw-bolder" href={resume} download={resume}>
                    Download CV
                  </a> 
                </button>
            </div>

        </Container>
    </section>
   
  )
}

export default About