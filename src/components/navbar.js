import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" style={{position: "fixed", width: "100%", top: "0"}}>
      <Container>
        <Navbar.Brand href="/"><img src="https://www.seekpng.com/png/detail/18-187098_d20-dice-png-d20-vector.png" alt="D20" style={{ maxHeight: "100px"}}/>DM Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/kwmorris/DnD/blob/master/5e/Books/D%26D%205E%20-%20Dungeon%20Master's%20Guide.pdf" style= {{paddingLeft: "100px"}}>DMG</Nav.Link>
            <Nav.Link href="https://orkerhulen.dk/onewebmedia/Monster%20Manual.pdf">Monster Manual</Nav.Link>
            <Nav.Link href="https://media.wizards.com/2020/dnd/downloads/dnd_5e_charactersheets.pdf">Character Sheet</Nav.Link>
            <NavDropdown title="Rules & Aid" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://roll20.net/compendium/dnd5e/Conditions#content">Status Conditions</NavDropdown.Item>
              <NavDropdown.Item href="https://kastark.co.uk/rpgs/encounter-calculator-5th/">Encounter Difficulty</NavDropdown.Item>
              <NavDropdown.Item href="https://www.dndbeyond.com/equipment">Equipment</NavDropdown.Item>
              <NavDropdown.Item href="https://www.dndbeyond.com/magic-items">Magic Items</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.dndbeyond.com/monsters/17034-tarrasque">
                How To Kill My Players
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="https://www.notion.so/login">DM Notes</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;