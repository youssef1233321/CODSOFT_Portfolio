import { useRef } from "react"
import { Navbar , Nav , Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"



const Header = () => {
    const link = useRef()
    const navigate = useNavigate()

    const handleActive = (e)=>{    
        e.preventDefault()
        for(let i = 0 ; i < link.current.children.length ; i++){
            link.current.children[i].classList.remove("active")
        }
        navigate('/')
        window.scrollTo(0 , 0)
    }

  return (
    <>
    <Navbar expand="lg" className=" header" >
      <Container>
        <Link  className="text-decoration-none " onClick={(e)=>handleActive(e)}>
            <Navbar.Brand className="links" ><span className="specialSpan">Youssef</span> | React Developer</Navbar.Brand>
        </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav "  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" ref={link}>
            <Nav.Link className="links" href="#home">Home</Nav.Link>
            <Nav.Link className="links" href="#about">About</Nav.Link>  
            <Nav.Link className="links" href="#Projects">Projects</Nav.Link>   
            <Nav.Link className="links" href="#Contact">Contact</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </>
  )
}

export default Header