import React, { useState, useEffect } from 'react';
import BasicExample from "./navbar.js";
import InitiativeModal from "./initiative.js";
import Monsters from "./monsters.js";
import Roll from "./roll.js";




function App() {


  return (
    <div className="App" style={{backgroundImage: `url("https://wallpaperaccess.com/full/1588550.jpg")`, backgroundSize: "cover", maxHeight: "100vh"}}>
      <header className="App-header">
      </header>
      <BasicExample/>
      <InitiativeModal />
      <Monsters style={{position: "relative", left: "0", bottom: "0"}}/>
      <Roll/>
    </div>
  );
}

export default App;
