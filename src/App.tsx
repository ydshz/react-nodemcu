import React, { useState } from 'react';
import './App.css';
import Pressure from './pressure';
import Temperature from './temperature';
import Wet from './wet'
import axios from 'axios'

function App() {
  let [temperature,setTemperature] = useState<number>(0)
  let [pressure, setPressure] = useState<number>(0)
  let [wet, setWet] = useState<number>(0)
  axios.get('http://127.0.0.1:8000/data')
      .then(response => {
        setTemperature(response.data.temperature)
        setPressure(response.data.pressure)
        setWet(response.data.wet)
    })
  setInterval(async () => {
    axios.get('http://127.0.0.1:8000/data')
      .then(response => {
        setTemperature(response.data.temperature)
        setPressure(response.data.pressure)
        setWet(response.data.wet)
    })
  }, 30000)
  
  return (
    <div className="App">
     <h1>Nodemcu</h1>
     <Temperature value={temperature}></Temperature>
     <Pressure value={pressure}></Pressure>
     <Wet value={wet}></Wet>
    </div>
  );
}

export default App;
