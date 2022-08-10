import React from 'react';

function Roll() {

  let dieQty = 0;
  let dieValue = 0;
  let resultNum;

  const rollresult = () => {
    let min = dieQty;
    let max = dieQty * dieValue;
    resultNum = Math.ceil(Math.random() * (max - min + 1) + min);
    alert(`${dieQty === 0 || dieValue === 0 ? 'Please Select Valid Quantity and Dice Values' : 'Roll result for ' + dieQty + ' D' + dieValue + ' is: ' + resultNum}`);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "6px", backgroundImage: `url("https://www.tarkett-asia.com/media/img/M/THH_LVT_Starfloor_Click_Old_Stone_Anthracite.jpg")`, maxWidth: "285px" }}>
      <button onClick = {() => rollresult()} style={{ marginRight: "15px" }}>Roll</button>
      <form onChange = {(e) => {dieQty = e.target.value}} style={{ textShadow: "5px 5px 5px black" }}><label style={{ color: "white", margin: "5px" }}>Qty: </label><input type="number" placholder="1" style={{ width: "40px" }} /></form>
      <form onChange = {(e) => {dieValue = e.target.value}} style={{ textShadow: "5px 5px 5px black" }}><label style={{ color: "white", margin: "5px" }}>Dice </label><select style={{ width: "70px", height: "30px" }}>
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
  )
}

export default Roll;