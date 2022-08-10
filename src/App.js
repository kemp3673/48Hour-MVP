import React, { useState, useEffect } from 'react';
import NavbarComponent from "./components/navbar.js";
import InitiativeModal from "./components/initiative.js";
import Monsters from "./components/monsters.js";
import Roll from "./components/roll.js";
import Spotify from "./components/spotify.js";


function App() {

  return (
    <div className="App" style={{backgroundImage: `url("https://wallpaperaccess.com/full/1588550.jpg")`, backgroundSize: "cover", height: "100vh", overflow: "hidden"}}>
      <header className="App-header">
      </header>
      <NavbarComponent/>
      <InitiativeModal />
      <Monsters style={{position: "relative", left: "0", bottom: "0"}}/>
      <Roll />
      <Spotify/>
    </div>
  );
}

export default App;




