import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

 export default Navbar=()=> {
  return (
    <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Miore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{width:"50%"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
            
            
          </Nav>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Button  variant="outline-success">Sign In</Button>
          <Button style={{marginLeft:"1rem"}} variant="outline-danger">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

