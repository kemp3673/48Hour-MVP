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

  const handleOnDragEnd = (result) => {
    const drugCard = characters[result.source.index];
    const newOrder = characters;
    newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, drugCard);
  }

  const updateInit = (index, e) => {
    e.preventDefault();
    const copyChar = [...characters];
    copyChar[index].initiative = Number(e.target.value);
    setCharacters(copyChar);
  }

  const order = () => {
    let sortedOrder = [];
    sortedOrder.push(characters[0]);
    for (var i = 1; i < characters.length; i++) {
      for (var j = 0; j < sortedOrder.length; j++) {
        if (characters[i].initiative > sortedOrder[j].initiative) {
          sortedOrder = sortedOrder.splice(j, 0, characters[i]);
          break;
        } else if (j === sortedOrder.length - 1 ) {
          sortedOrder.push(characters[i]);
          break;
        }
      }
    }
  }

  return (
    <div className="InitiativeTracker" style={{backgroundColor: "beige", width: "20vw", maxHeight: "76vh", overflowY: "scroll", marginBottom: "15px"}}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characterCards">
          {(provided) => (
            <ul style={{ listStyle: "none" }} {...provided.droppableProps} ref={provided.innerRef}>
              <h3>Character Tracker</h3>
              {characters.length > 0 ? characters.map((player, index) => {
                return (
                  <Draggable key={player.character_name} draggableId={player.character_name} index={index} >
                    {(provided) => (
                      <li className="CharacterCard" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <img style={{ maxHeight: "100px", maxWidth: "100px" }} src={player.image} alt={player.character_name} />
                        <p><b>Character Name: </b>{player.character_name}</p>
                        <span><b>AC </b>{player.ac}</span>&nbsp;
                        <span><b>Max HP: </b>{player.max_hp}</span>
                        <form onChange={(e) => updateHP(index, e)}><label>Current HP: <input style={{maxWidth: "45px"}} type="number" placeholder={player.current_hp} /></label></form>
                        <br></br>
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
    </div>

  )
}

export default InitiativeModal;