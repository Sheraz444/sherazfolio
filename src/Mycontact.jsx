import React from 'react'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faLayerGroup, faCode, faDesktop} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Mycontact = () => {

    let contacpage= useNavigate();

    const handleclick= ()=>{
    contacpage("/contact")
    }
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



    <section >
    <div className="row mx-0  " style={{backgroundColor: "rgb(45, 46, 50)"}}>
        <div className="col-md-6 mt-5 lft" style={{ padding: ""}} >
            <div className="row" >
                <div className="col" style={{  width: "100%"}}>
<h2>Contact Me</h2>
<h1>Get in Touch With Me</h1>
<p style={{padding: "20px"}}>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert Factual knowledge is less prized when everything you ever need to know can be found at doing everything.</p>
</div>
</div>
<div className="numbers" style={{ width: "100%"}}>
    <div className="num">
        <h2>WhatsApp: <p>03366107647</p></h2>
    </div>
    <div className="email" style={{textAlign: "left"}}>
        <h2 style={{padding: "20px"}}>Email: <p>shazebsheikh420</p> </h2>
    </div>
</div>
    
    </div>            
        
        <div className="col-md-6 mt-5 mx-0 rt" style={{ padding: ""}}>
        <Form style={{padding: "20px"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label style={{color: "white"}}>Your Name</Form.Label>
        <Form.Control style={{backgroundColor: "transparent", border: "2px solid green"}} type="text" placeholder="name@example.com" />

        <Form.Label style={{color: "white"}}>Email address</Form.Label>
        <Form.Control style={{backgroundColor: "transparent", border: "2px solid green"}} type="email" placeholder="Your Name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{color: "white"}}>Write your message</Form.Label>
        <Form.Control  style={{backgroundColor: "transparent", border: "2px solid green", height: ""}} as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <div className="bt" style={{marginBottom: "30px"}} >
        
        <button type="button" className="btn btn-warning ">Send Message</button>
        </div>
        </div>
    </div>
    </section>
    
    </>
  )
}

export default Mycontact