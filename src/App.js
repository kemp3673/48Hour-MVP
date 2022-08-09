import React, { useState, useEffect } from 'react';
import BasicExample from "./navbar.js";
import InitiativeModal from "./initiative.js";
import NotesModal from "./notes.js";




function App() {


  return (
    <div className="App">
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
