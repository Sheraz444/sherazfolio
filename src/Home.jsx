import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hero from './images/hero-img2.jpeg'
import projecti from './images/portfolio-1-img.jpg'
import projecti2 from './images/portfolio-2-img.jpg'
import social from './images/socials.jpeg'
// import css from '../src/page.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faLayerGroup, faCode, faDesktop} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
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
      <FontAwesomeIcon icon={faGlobe} style={{color: "#0ca778", fontSize: "50px", marginRight: "10px"}}  />
        <Navbar.Brand href="#home">
        <h1 style={{fontFamily: "'Josefin Sans', sans-serif", marginTop: "10px"}} >SHERAZ</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-5" >
            <Nav.Link ><Link style={{textDecoration: "none",color: "white"}}to="/">HOME</Link></Nav.Link>
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
          <div className="bt" >
        
        <button onClick={handleclick} type="button" className="btn btn-warning ">Contact Me</button>
        </div>
        </Navbar.Collapse>
       
      </div>
    </Navbar>

<section>

  <div className=" row  text-white main mx-0" style={{backgroundColor: "rgb(29, 29, 33)"}}>

    <div className="left col-md-6  "   >
        <div className="heading  " data-aos="zoom-in" >
      <span style={{color: "rgb(92, 219, 141)"}}>Introducing</span>
      </div>
      <div className="hellow " data-aos="zoom-in">
      <h1 >Hellow</h1>
      <h1> I'm Sheraz</h1>
      <h1 >  Sheikh</h1>
      <span style={{marginLeft: "20px", color: "rgb(92, 219, 141)", fontSize: "25px"}} >Front-End Web Developer</span>
      </div>
      <div className="intro ">
      <span data-aos="zoom-in"> I am professional Front-end web Developer, with 1 year 
experience and meaningfully contribution to teams. I have 
a deep Knowledge and grip on the programing languages 
like HTML, CSS, JAVA SCRIPT and front-end frame work 
like BOOTSTRAP and REACT JS, Passionate about 
learning and development with a desire to apply skills.
</span>
      </div>
      <div className="buttn" data-aos="zoom-in">
      <button onClick={handleclick} type="button" className="btn btn-warning">Contact Me</button>
      </div>
    </div>
    <div className="right col-md-6 mx-0" data-aos="zoom-in">
      <div className='pic mx-0' >
      <img  src={hero} alt="" />
      </div>
    
    </div>
  </div>
</section>

{/* ===================================  SKILLS SECTION         ========================= */}
<section>

    <div className="row mx-0 "  style={{backgroundColor: "rgb(45, 46, 50)"}} >
<div className="col-md-8 left">

<div className="row mx-0 top"   >
<div className="card col-md-6 mx-1" data-aos="zoom-in"   >
  <div className="card-body">
    <h3 className="card-title">Front-End Developer</h3>
    <p className="card-text">The technological revolution is changing aspect</p>
    <div className="logo">
<FontAwesomeIcon icon={faDesktop} style={{color: "#0ca778", fontSize: "50px"}} />
</div>
  </div>

</div>


<div className="card col-md-6 mx-1 " data-aos="zoom-in"   >
  <div className="card-body">
    <h3 className="card-title">React Developer</h3>
    <p className="card-text">The technological revolution is changing aspect</p>
    <div className="logo">
<FontAwesomeIcon icon={faCode} style={{color: "#0ca778", fontSize: "50px"}} />
</div>
  </div>
</div>
</div>


<div className="row mx-0 ">
<div className="card col-md-6 mx-1"  data-aos="zoom-in"   >
  <div className="card-body">
    <h3 className="card-title">UI/UX Developer</h3>
    <p className="card-text">The technological revolution is changing aspect</p>
    <div className="logo">
<FontAwesomeIcon icon={faLayerGroup} style={{color: "#0ca778", fontSize: "50px"}} />
</div>
  </div>

</div>


<div className="card col-md-6 mx-1 "   data-aos="zoom-in"  >
  <div className="card-body">
    <h3 className="card-title">WEB Developer</h3>
    <p className="card-text ">The technological revolution is changing aspect</p>
    <div className="logo ">
<FontAwesomeIcon icon={faGlobe} style={{color: "#0ca778", fontSize: "50px"}} />
</div>
  </div>
</div>
</div>

</div>

<div className="col-md-4 right " >
  <div className="wrapper" >
<div className="heading" data-aos="zoom-in"  >
    <span>My SKILLS</span>
</div>
<div className="detail"  >
    <h1 data-aos="zoom-in">Why Hire Me For Next Project?</h1>
    <p data-aos="zoom-in"  >You might hire me as a web developer because of my expertise in creating responsive and efficient websites, strong proficiency in relevant programming languages and frameworks, and a proven track record of delivering high-quality projects on time. My skills in problem-solving, attention to detail, and staying updated with the latest industry trends could contribute to the success of your web development endeavors.</p>
    <button type="button" className="btn btn-warning "data-aos="zoom-out"  >Download CV</button>
</div>
</div>
</div>
    </div>
</section>


{/* ===================================== PROJECT SECTION ======================== */}

<section>

<div className="row  mx-0  "   style={{backgroundColor: "rgb(45, 46, 50)"}}>
  <div className="col-md-6 leftd"data-aos="zoom-in" >
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
  <div className="col-md-6  rightp" >
    <div className="pico " data-aos="zoom-in" >
      <img src= {projecti} alt=""  />
    </div>
  </div>
</div>

{/* ================== par 2 ========== */}
<div className="row  mx-0  "   style={{backgroundColor: "rgb(45, 46, 50)"}}>
  <div className="col-md-6 leftp" data-aos="zoom-in">
  <div className="pico ">
      <img src={projecti2} alt="" />
    </div>
  </div>
  
  <div className="col-md-6  rightd" data-aos="zoom-in" >
  <div className="wraper">
      <div className="name">
        <span>PROJECT-2</span>
      </div>
      <h1>Branding Nice Studio</h1>
      <p data-aos="zoom-in">
The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
   <h3 style={{color: "rgb(255, 193, 7)"}}> > Read More</h3>
    </div>
</div>
</div>

</section>


<section>
  <div className="row mx-0 "style={{backgroundColor: "rgb(45, 46, 50)"}}>

    <div className="col mt-5 wrape" data-aos="zoom-in">
     
<div className=" msg " data-aos="zoom-in">
  
  <h1> Lets Work Togather</h1>

  <h6>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn</h6>
 
<div className="but" data-aos="zoom-in">
  <button onClick={handleclick} type="button" className="btn btn-warning ">Contact ME</button>
  </div>


</div>
    </div>
  </div>
</section>
<section>

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
</section>
    
    </>
  )
}

export default Home