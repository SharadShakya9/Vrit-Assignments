import './App.css'
import ButtonFactory from './components/button/ButtonFactory'

function App() {

  return (
    <>
      <div className='btn-container'>
        <ButtonFactory type="subscribe"/>
        <ButtonFactory type="download"/>
        <ButtonFactory type="loading"/>
        <ButtonFactory type="play"/>
        <ButtonFactory type="logout"/>
        <ButtonFactory type="love"/>
        <ButtonFactory />
      </div>
    </>
  )
}

export default App
