import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Roll() {
  const [show, setShow] = useState(false);
  const [dieQty, setDieQty] = useState(0);
  const [dieValue, setDieValue] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rollresult = () => {
    let min = dieQty;
    let max = dieQty * dieValue;
    if (min === 0 || max === 0) {
      return "Please Select Valid Inputs"
    }
    return Math.ceil(Math.random() * (max - min + 1) + min);
  }

  return (
    <div style={{ position: "absolute", bottom: "10px", left: "200px" }}>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "6px", backgroundImage: `url("https://www.tarkett-asia.com/media/img/M/THH_LVT_Starfloor_Click_Old_Stone_Anthracite.jpg")`, maxWidth: "285px" }}>
        <Button style={{ boxShadow: "2px 2px 5px black", backgroundColor: "#27445C", border: "black", marginRight: "15px" }} variant="primary" onClick={handleShow}>Roll</Button>
        <form onChange={(e) => { setDieQty(e.target.value) }} style={{ textShadow: "5px 5px 5px black" }}><label style={{ color: "white", margin: "5px" }}>Qty: </label><input type="number" placeholder="0" style={{ width: "50px" }}/></form>
        <form onChange={(e) => { setDieValue(e.target.value) }} style={{ textShadow: "5px 5px 5px black" }}><label style={{ color: "white", margin: "5px" }}>Dice </label><select style={{ width: "70px", height: "30px" }}>
          <option value="0">Pick</option>
          <option value="4">D4</option>
          <option value="6">D6</option>
          <option value="8">D8</option>
          <option value="10">D10</option>
          <option value="12">D12</option>
          <option value="20">D20</option>
          <option value="100">D100</option>
        </select>
        </form>
      </div>
      <Modal show={show} onHide={handleClose} style= {{position:"fixed", top:"25vh"}}>
        <Modal.Header closeButton style={{backgroundColor: "#27445C", color:"white"}}>
          <Modal.Title ><img src="https://images.tabletopaudio.com/sb/dm_tools_header1.png" alt="logo" style={{ height: "80px", marginRight: "20px"}}/> Roll Results</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div className="roll-result">
            <p>{dieQty === 0 || dieValue === 0 ? null : 'Rolled ' + dieQty + 'D' + dieValue}</p>
            <p><b>Result: {rollresult()}</b></p>
          </div>
        </Modal.Body>
        <Modal.Footer >
          <Button style={{boxShadow: "2px 2px 5px black", backgroundColor: "#27445C", color:"white"}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Roll;