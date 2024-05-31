import './App.css'
import ButtonFactory from './components/button'
import { useState } from 'react'

function App() {
  const [showAll, setShowAll] = useState(false)

  const handleButtons = () => {
    setShowAll(!showAll)
  }

  return (
    <>
      <div className='btn-container'><button onClick={handleButtons} className="all-button">Show All</button></div>
      <div className='container'>
        {showAll && (
          <>
            <ButtonFactory />
            <ButtonFactory type="amongus"/>
            <ButtonFactory type="antd"/>
            <ButtonFactory type="socials"/>
            <ButtonFactory type="back-to-top"/>
          </>
        )}
      </div>
    </>
  )
}

export default App
