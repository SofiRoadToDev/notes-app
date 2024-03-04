import Container from 'react-bootstrap/Container';
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap'
import { NavLink,Link} from "react-router-dom";
import { useContext } from 'react';
import NoteContext from '../context-data/NoteContext';
import { useNavigate } from "react-router-dom";

function NoteNavBar() {

  const navigate = useNavigate();  
  const {refreshFormVars}=useContext(NoteContext)
  const handleClik=()=>{
    refreshFormVars()
    navigate("/newNote")
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">       
        <Button variant="primary" onClick={handleClik}className='btn-dark' >Create new Note</Button>
      <Container >
        <Navbar.Brand>Notes App for Ensolvers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Notes</NavLink>
           
            <NavLink to="/filters" className="nav-link">Filters</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NoteNavBar   ;