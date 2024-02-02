import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import projecti from './images/portfolio-1-img.jpg'
import projecti2 from './images/portfolio-2-img.jpg'
import social from './images/socials.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faLayerGroup, faCode, faDesktop} from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Projectsmy = () => {

  let contacpage= useNavigate();

const handleclick= ()=>{
contacpage("/contact")
}

  useEffect(()=>{
    Aos.init({duration: "2600"})
      }, []);


  return (
    <>
      

      <Navbar expand="lg" className="bg-dark  " data-bs-theme="dark">
      <div className="container-fluid " >
      <FontAwesomeIcon icon={faGlobe} style={{color: "#0ca778", fontSize: "50px", marginRight: "10px"}}   />
        <Navbar.Brand href="#home">
        <h1 style={{fontFamily: "'Josefin Sans', sans-serif", marginTop: "10px"}} >SHERAZ</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5"  >
            <Nav.Link ><Link style={{textDecoration: "none",color: "white"}} to="/">HOME</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration: "none",color: "white"}} to="/project"> MY PROJECTS</Link></Nav.Link>
            <NavDropdown title="CONTACTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="bt"  >
        
        <button onClick={handleclick} type="button" className="btn btn-warning ">Contact Me</button>
        </div>
        </Navbar.Collapse>
       
      </div>
    </Navbar>



    <section>

<div className="row  mx-0  "   style={{backgroundColor: "rgb(45, 46, 50)"}}>
  <div className="col-md-6 leftd" data-aos="zoom-in" >
    <div className="wraper">
      <div className="name">
        <span>PROJECT-1</span>
      </div>
      <h1>Branding Nice Studio</h1>
      <p data-aos="zoom-in">
The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
   <h3 style={{color: "rgb(255, 193, 7)"}} data-aos="zoom-out" > > Read More</h3>
    </div>
  </div>
  <div className="col-md-6  rightp"  >
    <div className="pico " data-aos="zoom-in">
      <img src={projecti} alt="" />
    </div>
  </div>
</div>

{/* ================== par 2 ========== */}
<div className="row  mx-0  "   style={{backgroundColor: "rgb(45, 46, 50)"}}>
  <div className="col-md-6 leftp"  >
  <div className="pico " data-aos="zoom-in" >
      <img src={ projecti2} alt="" />
    </div>
  </div>
  
  <div className="col-md-6  rightd"  >
  <div className="wraper" data-aos="zoom-in">
      <div className="name">
        <span>PROJECT-2</span>
      </div>
      <h1>Branding Nice Studio</h1>
      <p data-aos="zoom-in">
The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
   <h3 style={{color: "rgb(255, 193, 7)"}}data-aos="zoom-out" > > Read More</h3>
    </div>
</div>
</div>

</section>


<div className="container-fluid mt-20" style={{ backgroundColor: "rgb(29, 29, 33)"}}>
  <div className="row py-5" style={{color: "white"}}>
   <div className="col-md-4" data-aos="zoom-in">
    <div className='a'>
     <FontAwesomeIcon icon={faGlobe} style={{color: "#0ca778", fontSize: "50px", display: "inline"}} />
     <span style={{fontSize: "50px", paddingLeft: "15px",fontFamily: "'Josefin Sans', sans-serif" }}>SHERAZ</span>
     </div>
     </div>
   <div className="col-md-4" data-aos="zoom-in"> <h1>copyright@gmail.com</h1></div>
   <div className="col-md-4 social dc" data-aos="zoom-in">
    <img src={social} alt="" />
   </div>
  </div>
</div>

    </>
  )
}

export default Projectsmy