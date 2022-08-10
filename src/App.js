import React, { useState, useEffect } from 'react';
import BasicExample from "./navbar.js";
import InitiativeModal from "./initiative.js";
import NotesModal from "./notes.js";




function App() {


  return (
    <div className="App" style={{backgroundImage: `url("https://rare-gallery.com/uploads/posts/965195-solarized-colorscheme-Dungeons-amp-Dragons-minimalism.png")`, backgroundSize: "cover"}}>
      <header className="App-header">
        <h1>
          DM TOOLKIT
        </h1>
      </header>
      {/* <BasicExample/> */}
      <InitiativeModal />
      <NotesModal/>
    </div>
  );
}

export default App;
