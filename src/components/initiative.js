import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function InitiativeModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    axios.get('/character')
      .then((data) => {
        setCharacters(data.data);
      });
  }

  const updateHP = (index, e) => {
    e.preventDefault();
    characters[index].current_hp = Number(e.target.value);

    axios.put('/character',
      {
        "character_name": characters[index].character_name,
        "current_hp": Number(e.target.value)
      });
  }

  const handleOnDragEnd = (result) => {
    const drugCard = characters[result.source.index];
    const newOrder = characters;
    newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, drugCard);
  }

  let newHero;
  let newPlayer;
  let newAC;
  let newHP;
  let newImg;


  const handleAdd = () => {
    if (newHero === undefined || newPlayer === undefined) {
      alert("Minimum Player and Hero Name Must Be Present")
    } else {
      let newCharacter = {
        "character_name": newHero,
        "player_name": newPlayer,
        "ac": newAC,
        "current_hp": newHP,
        "max_hp": newHP,
        "initiative": 0,
        "image": newImg
      };
      axios.post('/character',
      newCharacter
      );
      setCharacters(characters => [...characters, newCharacter])
      handleClose();
    }
  }

  return (
    <div className="InitiativeTracker" style={{ backgroundColor: "beige", width: "350px", maxHeight: "80vh", overflowY: "scroll", postition: "relative", marginTop: "135px", marginBottom: "50px", marginLeft:"1px"}}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characterCards">
          {(provided) => (
            <ul style={{ listStyle: "none", marginRight:"20px"}} {...provided.droppableProps} ref={provided.innerRef}>
              <h3 style={{textShadow: "4px 4px 6px gray", marginLeft:"20px"}}><b>Character Tracker</b></h3>
              {characters.length > 0 ? characters.map((player, index) => {
                return (
                  <Draggable key={player.character_name} draggableId={player.character_name} index={index}>
                    {(provided) => (
                      <li className="CharacterCard" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div style={{border: "2px solid black", margin: "5px", backgroundColor: "beige"}}>
                        <img style={{ maxHeight: "100px", maxWidth: "100px"}} src={player.image} alt={player.character_name} />
                        <p><b>Character Name: </b>{player.character_name}</p>
                        <span style={{marginLeft: "20px"}}><b>AC </b>{player.ac}</span>&nbsp;
                        <span style={{marginLeft: "80px"}}><b>Max HP: </b>{player.max_hp}</span>
                        <form style={{marginLeft: "40px"}} onChange={(e) => updateHP(index, e)}><label>Current HP: <input style={{ maxWidth: "45px", boxShadow: "2px 2px 2px black", height: "25px", marginBottom: "5px", marginLeft:"12px" }} type="number" placeholder={player.current_hp} /></label></form>
                        </div>
                      </li>
                    )}
                  </Draggable>
                )
              }) : <span>No Characters have appeared</span>}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <Button style={{ backgroundColor: "#27445C", border: "black", boxShadow: "2px 2px 5px black" }} variant="primary" onClick={handleShow}>
        Add Character
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: "#27445C", color:"white"}}>
          <Modal.Title style={{fontSize: "30px"}}><img src="https://images.tabletopaudio.com/sb/dm_tools_header1.png" alt="logo" style={{ height: "80px", marginRight: "20px"}}/> <b>Add New Hero</b></Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="form-group">
            <label ><b>Character Name</b></label>
            <input className="form-control form-control-lg" type="text" placeholder="Hero Name" style={{ marginBottom: "10px" }}
              onChange={(e) => newHero = e.target.value} />
            <label><b>Player Name</b></label>
            <input className="form-control form-control-lg" type="text" placeholder="John Smith" style={{ marginBottom: "10px" }}
              onChange={(e) => newPlayer = e.target.value} />
            <label><b>AC</b></label>
            <input className="form-control form-control-lg" type="number" placeholder="18" style={{ marginBottom: "10px" }}
              onChange={(e) => newAC = e.target.value} />
            <label><b>Max HP</b></label>
            <input className="form-control form-control-lg" type="number" placeholder="26" style={{ marginBottom: "10px" }}
              onChange={(e) => newHP = e.target.value} />
            <label><b>Image URL</b></label>
            <input className="form-control form-control-lg" type="text" placeholder="http://example.com" style={{ marginBottom: "10px" }}
              onChange={(e) => newImg = e.target.value} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{boxShadow: "2px 2px 5px black", backgroundColor: "#27445C", color:"white"}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button style={{boxShadow: "2px 2px 5px black", backgroundColor: "#27445C", color:"white"}} variant="Primary" onClick={() => handleAdd()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default InitiativeModal;