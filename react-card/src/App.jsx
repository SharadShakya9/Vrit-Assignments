import './App.css'
import Wrapper from './components/wrapper/Wrapper'
import CardFactory from './components/card/CardFactory'
import destiny2 from "./assets/images/destiny2.jpg"
import eldenring from "./assets/images/eldenring.png"
import rust from "./assets/images/rust.png"
import pubg from "./assets/images/pubg.png"

function App() {

  return (
    <>
      <Wrapper>
        <CardFactory
          image={destiny2}
          title="Destiny 2"
          description="Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free."
          price="" />
        <CardFactory
          image={eldenring}
          title="Elden Ring"
          description="THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between."
          price="59.99" />
        <CardFactory
          image={rust}
          title="Destiny 2"
          description="The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night."
          price="19.99" />
        <CardFactory
          image={pubg}
          title="PUBG: BATTLEGROUNDS"
          description="Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer"
          price="" />
      </Wrapper>
    </>
  )
}

export default App
