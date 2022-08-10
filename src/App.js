import React, { useState, useEffect } from 'react';
import BasicExample from "./navbar.js";
import InitiativeModal from "./initiative.js";
import NotesModal from "./notes.js";




function App() {


  return (
    <div className="App" style={{backgroundImage: `url("https://wallpaperaccess.com/full/1588550.jpg")`, backgroundSize: "cover"}}>
      <header className="App-header">
      </header>
      <BasicExample/>
      <InitiativeModal />
      <NotesModal/>
    </div>
  );
}

export default App;
