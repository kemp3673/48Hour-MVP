import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    axios.get('/monster')
      .then((data) => {
        setMonsters(data.data);
      });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor: "#27445C", border: "black", position: "absolute", bottom: "10px", boxShadow: "2px 2px 5px black"}} variant="primary" onClick={handleShow}>
        Quick Access Monsters
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: "#27445C", color:"white"}}>
          <Modal.Title style={{fontSize: "40px"}}><img src="https://images.tabletopaudio.com/sb/dm_tools_header1.png" alt="logo" style={{ height: "80px", marginRight: "20px"}}/> <b>Monsters</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul style={{listStyle: "none"}}>
            {monsters.length > 0 ? monsters.map((monster, index) => {
              return (
                <div key={monster.monster_name} style={{borderBottom: "4px solid black", marginBottom: "10px"}}>
                <li index={index}>
                  <p style={{fontSize: "30px"}}><b>{monster.monster_name}</b></p>
                  <img className="img-fluid img-thumbnail" src={monster.image} alt={monster.monster_name} />
                  <p><b>Speed:</b> {monster.speed}ft</p>
                  <p><b>AC:</b> {monster.ac}</p>
                  <p><b>CR:</b> {monster.cr}</p>
                  <p><b>HP:</b> {monster.max_hp}</p>
                  <p>
                  <b>Str:</b> {monster.str}&nbsp;
                    <b> Dex:</b> {monster.dex}&nbsp;
                    <b>Con:</b> {monster.con}&nbsp;
                    <b>Int:</b> {monster.int}&nbsp;
                    <b>Wis:</b> {monster.wis}&nbsp;
                    <b>Cha:</b> {monster.cha}
                  </p>
                  <p><b>Info:</b> {monster.info}</p>
                  <p><b>Actions:</b> {monster.actions}</p>
                </li>
                </div>
              )
            }) : null}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "#27445C", color:"white"}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Monsters;