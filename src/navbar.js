import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="https://www.seekpng.com/png/detail/18-187098_d20-dice-png-d20-vector.png" alt="D20" style={{ maxHeight: "100px"}}/>DM Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/kwmorris/DnD/blob/master/5e/Books/D%26D%205E%20-%20Dungeon%20Master's%20Guide.pdf">DMG</Nav.Link>
            <Nav.Link href="https://orkerhulen.dk/onewebmedia/Monster%20Manual.pdf">Monster Manual</Nav.Link>
            <NavDropdown title="Rules" id="basic-nav-dropdown">
              <NavDropdown.Item >Status Conditions</NavDropdown.Item>
              <NavDropdown.Item >
                Challenge Rating
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.dndbeyond.com/equipment">Equipment</NavDropdown.Item>
              <NavDropdown.Item href="https://www.dndbeyond.com/magic-items">Magic Items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.dndbeyond.com/monsters/17034-tarrasque">
                How To Kill My Players
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link >DM Notes</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default BasicExample;