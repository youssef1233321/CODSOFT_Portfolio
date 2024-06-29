import { Container , Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import homeImage from "../../assets/Images/Home.png"

const Home = () => {
  return (
    <section className="home" id="home">
        <Container>
            <Row className=" align-items-center">
                <div className="col-lg-6 ">
                    <div className="colOne col">
                        <p>Hello , I`m</p>
                        <h1>Youssef Abourehab</h1>
                        <h3>Front-End Developer</h3>
                        <a href="#about">
                            <button className="btn btn-danger border-0">Get Started</button>
                        </a> 
                    </div>
                </div>
                <div className="col-lg-6 parentColTwo">
                    <div className="w-75 mx-auto colTwo col">
                        <img src={homeImage} alt="Software Developer" className="w-100" />
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Home