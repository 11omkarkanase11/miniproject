import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Loc.css';
import Timer from "../Timer/Timer";

function Loc() {
  const [myLoc, setMyLoc] = useState("Current Location");
  const [destLoc, setDestloc] = useState("Destinantion");
  const navigate = useNavigate();
  const [time,setTime]=useState(false);
  const handleChangeSrc = (event) => {
    setMyLoc(event.target.value)
  }
  const handleChangeLoc = (event) => {
    setDestloc(event.target.value)
  }

  setTimeout(() => {
    return (
      setTime(true)
    )
  }, 3000)

  if (!time) {
    return <Timer />
  }
  else
    return (
      <div id="card" className="bg-gradient-to-r from-orange-500 to-yellow-500">

        <form id="form" className="border-4 border-orange-600 p-28 shadow-2xl shadow-black">

          <br></br>
          <label id="label">Select Your Location:&nbsp; </label>
          <select id="select1" value={myLoc} onChange={handleChangeSrc} className="focus:outline-none">
            <option value="Source">Source</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nashik">Nashik</option>
            <option value="SambahajiNagar">SambahajiNagar</option>
          </select><br></br>
          <br></br>
          <label id="label">Select Destination :&nbsp; &nbsp;&nbsp;</label>
          <select id="select2" value={destLoc} onChange={handleChangeLoc} className="focus:outline-none">
            <option value="Destination">Destination</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Nashik">Nashik</option>
            <option value="SambahajiNagar">SambahajiNagar</option>
          </select><br></br>
          <br></br>

          <button id="submit" className="mt-8 " onClick={() => { navigate('/displayDrivers') }} >Submit</button>
        </form>
      </div>
    )
}

export default Loc;