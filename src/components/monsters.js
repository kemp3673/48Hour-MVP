import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/monster')
      .then((data) => {
        setMonsters(data.data);
      });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor: "gray", border: "black", position: "absolute", bottom: "10px"}} variant="primary" onClick={handleShow}>
        Quick Access Monsters
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Monsters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {monsters.length > 0 ? monsters.map((monster, index) => {
              return (
                <li key={monster.monster_name} index={index}>
                  <p><b>{monster.monster_name}</b></p>
                  <img src={monster.image} alt={monster.monster_name} />
                  <p><b>Speed:</b> {monster.speed}ft</p>
                  <p><b>AC:</b> {monster.ac}</p>
                  <p><b>CR:</b> {monster.cr}</p>
                  <p><b>HP:</b> {monster.hp}</p>
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
              )
            }) : null}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Monsters;