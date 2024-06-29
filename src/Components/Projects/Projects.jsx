import { Container } from "react-bootstrap"
import { FaGithub } from "react-icons/fa";

import project1 from "../../assets/projectsImages/ECommerce.png"
import project2 from "../../assets/projectsImages/appointment.png"
import project3 from "../../assets/projectsImages/CRUD.png"
import project4 from "../../assets/projectsImages/guessGame.png"
import project5 from "../../assets/projectsImages/kasper.png"
import project6 from "../../assets/projectsImages/leon.png"


const Projects = () => {
  return (
    <section className="projects" id="Projects">
        <Container>
            <h2 className="special-heading">Projects</h2>
            <p>If you do it right, it will last forever.</p>
            <h3>My Work</h3>
            <div className="row mainRow">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="projectCard">
                        <div className="imageCard">
                            <img src={project1} alt=""  className="w-100"/>
                        </div>
                        <h4>E-Commerce Website</h4>
                        <p className="text-center mt-3">Made By ReactJs, Bootstrap, and a REST API.</p>
                         <div className="text-center">
                            <a href="https://github.com/youssef1233321/ECommerce" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50} color="#ccc" />
                            </a>
                        </div>
                        <div className=" mt-4">
                            <a href="https://youssef1233321.github.io/ECommerce/" className="w-100 d-flex justify-content-center" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-danger w-50  buttonCard border-0">Demo</button>
                            </a>   
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="projectCard">
                        <div className="imageCard">
                            <img src={project2} alt=""  className="w-100"/>
                        </div>
                        <h4>Appointment List App</h4>
                        <p className="text-center mt-3">Made By ReactJs , Bootstrap , Redux , JSON Server</p>
                         <div className="text-center">
                            <a href="https://github.com/youssef1233321/Appointment-List" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50} color="#ccc" />
                            </a>
                        </div>
                        <div className=" d-flex justify-content-center mt-4">
                           
                                <button disabled={true} className="btn btn-danger w-50  buttonCard border-0">Demo</button>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="projectCard">
                        <div className="imageCard">
                            <img src={project3} alt=""  className="w-100"/>
                        </div>
                        <h4>CRUD System</h4>
                        <p className="text-center mt-3">Made By HTML , CSS and JS With Local-Storage</p>
                         <div className="text-center">
                            <a href="https://github.com/youssef1233321/CRUD-System" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50} color="#ccc" />
                            </a>
                        </div>
                        <div className=" mt-4">
                            <a href="https://youssef1233321.github.io/CRUD-System/" className="w-100 d-flex justify-content-center" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-danger w-50  buttonCard border-0">Demo</button>
                            </a>   
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="projectCard">
                        <div className="imageCard">
                            <img src={project4} alt=""  className="w-100"/>
                        </div>
                        <h4>Guess Game</h4>
                        <p className="text-center mt-3">Made By JavaScript , JQuery , BootStrap</p>
                         <div className="text-center">
                            <a href="https://github.com/youssef1233321/guessGame" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50} color="#ccc" />
                            </a>
                        </div>
                        <div className=" mt-4">
                            <a href="https://youssef1233321.github.io/guessGame/" className="w-100 d-flex justify-content-center" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-danger w-50  buttonCard border-0">Demo</button>
                            </a>   
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="projectCard">
                        <div className="imageCard">
                            <img src={project5} alt=""  className="w-100"/>
                        </div>
                        <h4>Kasper Landing Page</h4>
                        <p className="text-center mt-3">Made By HTML , CSS</p>
                         <div className="text-center">
                            <a href="https://github.com/youssef1233321/htmlCssTemp2" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50} color="#ccc" />
                            </a>
                        </div>
                        <div className=" mt-4">
                            <a href="https://youssef1233321.github.io/htmlCssTemp2/" className="w-100 d-flex justify-content-center" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-danger w-50  buttonCard border-0">Demo</button>
                            </a>   
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="projectCard">
                        <div className="imageCard">
                            <img src={project6} alt=""  className="w-100"/>
                        </div>
                        <h4>Leon Landing Page</h4>
                        <p className="text-center mt-3">Made By HTML , CSS</p>
                         <div className="text-center">
                            <a href="https://github.com/youssef1233321/htmlCssTemp1" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={50} color="#ccc" />
                            </a>
                        </div>
                        <div className=" mt-4">
                            <a href="https://youssef1233321.github.io/htmlCssTemp1/" className="w-100 d-flex justify-content-center" target="_blank" rel="noopener noreferrer">
                                <button className="btn btn-danger w-50  buttonCard border-0">Demo</button>
                            </a>   
                        </div>
                    </div>
                </div>
                
            </div>
        </Container>
    </section>
  )
}

export default Projects