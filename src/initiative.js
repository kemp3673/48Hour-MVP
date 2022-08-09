import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

function InitiativeModal() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/character')
      .then((data) => {
        setCharacters(data.data);
      });
  }, []);

  const updateHP = (index, e) => {
    e.preventDefault();
    characters[index].current_hp = Number(e.target.value);

    axios.put('http://localhost:3000/character',
      {
        "character_name": characters[index].character_name,
        "current_hp": Number(e.target.value)
      });
  }
  return (
    <div className="InitiativeTracker">
      <DragDropContext>
        <Droppable droppableId="characterCards">
          {(provided) => (
        <ul style={{ listStyle: "none" }} {...provided.droppableProps} ref={provided.innerRef}>
          <h3>Initiative Tracker</h3>
          {characters.length > 0 ? characters.map((player, index) => {
            return (
              <Draggable key={player.character_name} draggableId={player.character_name} index={index}>
                {(provided) => (
              <li className="CharacterCard" style={{border: "2px solid black"}} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <img style={{ maxHeight: "100px", maxWidth: "100px" }} src={player.image} alt={player.character_name}/>
                <form><label>Initiative: <input type="text" placeholder="1D20" /></label></form>
                <p><b>Character Name: </b>{player.character_name}</p>
                <p><b>AC </b>{player.ac}</p>
                <p><b>Max HP: </b>{player.max_hp}</p>
                <form onChange={(e) => updateHP(index, e)}><label>Current HP: <input type="text" placeholder={player.current_hp} /></label></form>
              </li>
            )}
              </Draggable>
            )
          }) : <span>No Characters have appeared</span>}
        </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button>Clear</button>
      <button>Order</button>
      <button>Next Turn</button>
    </div>

  )
}

export default InitiativeModal;