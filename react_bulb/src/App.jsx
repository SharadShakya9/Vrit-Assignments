import { useState } from 'react'
import './App.css'
import bulbOn from "./assets/lightbulb-yellow.svg"
import bulbOff from "./assets/lightbulb-solid.svg"

function App() {
  const [bulb, setBulb] = useState(false)

  function switchBulb () {
    setBulb(!bulb)
  }

  return (
    <div className='container'>
      <div className="bulb-container">
        <img src={bulb ? bulbOff : bulbOn} alt="bulb" />
      </div>
      <button className="switch" onClick={() => switchBulb()}>Switch</button>
    </div>
  )
}

export default App
