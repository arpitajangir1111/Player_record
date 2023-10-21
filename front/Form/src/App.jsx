import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [Serial , setSerial] = useState("")
  const [PlayerName , setPlayerName] = useState("")
  const [Aadhar , setAadhar] = useState("")
  const [Game , setGame] = useState("")
  const [Age , setAge] = useState("")
  const [Position , setPosition] = useState("")
  const [State , setState] = useState("")
  const [Tournament , setTournament] = useState("")
  const [Organised , setOrganised] = useState("")
  const [Venue , setVenue] = useState("")
  
  
const AddDetails = async() =>{
  let result = await axios.post("http://localhost:8080/form/add",{
Serial,PlayerName,Aadhar,Game,Age,Position,State,Tournament,Organised,Venue
  })
  result = result.data
  console.log(result)
}




  return (
  
<div className='main'>
    <div className='form'>
      <form>
        <div className='list'>
        <label htmlFor="">Serial</label>
        <input type="text" placeholder='Enter serial no.' value={Serial} onChange={(e)=>{setSerial(e.target.value)}}/>
        </div>

        <div className='list'>
        <label htmlFor="">PlayerName</label>
        <input type="text" placeholder='Enter player name' value={PlayerName} onChange={(e)=>{setPlayerName(e.target.value)}}/>
        </div>

        <div className='list'>
        <label htmlFor="">Aadhar</label>
        <input type="text" placeholder='Aadhar no.' value={Aadhar} onChange={(e)=>{setAadhar(e.target.value)}}/>
        </div>

        <div className='list'>
        <label htmlFor="">Game</label>
        <input type="text" placeholder='Enter Game' value={Game} onChange={(e)=>{setGame(e.target.value)}}/>
        </div>

        <div className='list'>
        <label htmlFor="">AgeGroup</label>
        <select name="age" id="age"  value={Age} onChange={(e)=>{setAge(e.target.value)}}>
          <option value="Junior">Select</option>
        <option value="Junior">Junior</option>
        <option value="Senior">Senior</option>
        </select>

      
        </div>

        <div className='list'>
        <label htmlFor="">Position</label>
        <select name="Position" id="Position" value={Position} onChange={(e)=>{setPosition(e.target.value)}}>
        <option value="Position">Position</option>
        <option value="1st/Gold">1st/Gold</option>
        <option value="2nd/Silver">2nd/Silver</option>
        <option value="3rd/Bronze">3rd/Bronze</option>
        </select>
        
        
        </div>

        <div className='list'>
        <label htmlFor="">State</label>
        <input type="text" placeholder='' value={State} onChange={(e)=>{setState(e.target.value)}}/>
        </div>
    
        <div className='list'>
        <label htmlFor="">Tournament</label>
        <input type="text" placeholder='' value={Tournament} onChange={(e)=>{setTournament(e.target.value)}}/>
        </div>

        <div className='list'>
        <label htmlFor="">OrganisedAt</label>
        <input type="text" placeholder='' value={Organised} onChange={(e)=>{setOrganised(e.target.value)}}/>
        </div>

        <div className='list'>

        <label htmlFor="">Venue</label>
        <input type="text" placeholder='' value={Venue} onChange={(e)=>{setVenue(e.target.value)}}/>
        </div>

       

        <button onClick={(e)=>{
          e.preventDefault();
          AddDetails()
        }}>Submit</button>
        
     
       
      </form>
     
    </div>
    </div>
  )
}

export default App



