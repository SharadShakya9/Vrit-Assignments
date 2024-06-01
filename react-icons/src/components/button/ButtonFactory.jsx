import React from 'react'
import IconFactory from '../icon/IconFactory'
import './button.css'
import { useState } from 'react'

const ButtonFactory = ({type}) => {
    const [isSubscribe, setIsSubscribe] = useState(false)

    const [play, setPlay] = useState(false)

    const [loveCount, setLoveCount] = useState(0)

    const handleSubscribe = () => {
        setIsSubscribe(!isSubscribe)
    }

    const handlePlay = () => {
      setPlay(!play)
    }

    const handleLove = () => {
      setLoveCount(loveCount+1)
    }

  switch (type) {
    case "subscribe": return (
        <>
            <button className='subscribe' onClick={handleSubscribe}>
                {isSubscribe ? <IconFactory iconName="bell-regular" color="white" /> : <IconFactory iconName="bell-solid" color="white" /> } Subscribe</button>
        </>
    )
    case "download": return <><button className='download'><IconFactory iconName="download" color="aqua"/> Download</button></>
    case "loading": return <><button className='loading'><IconFactory iconName="loading" color="orange"/></button></>
    case "play":
      return (
        <>
        <button className='play' onClick={handlePlay}>
          {
            play ? <IconFactory iconName="pause" color="gold" /> : <IconFactory iconName="play" color="#AEE3BC"/>
          }
          {
            play ? "Pause" : "Play"
          }
          </button>
        </>
      )
    case "logout": return <a href="https://fontawesome.com/" target='_blank'><button className='logout'><IconFactory iconName="logout" color="white" />Logout</button></a>
    case "love": return <><button className='love' onClick={handleLove}><IconFactory iconName="love" color="#eee" /><span className='love-count'>{loveCount}</span></button></>
    default: return <><button className='default'><IconFactory iconName="hand-scissors-right" color="blue" />Default<IconFactory iconName="hand-scissors-left" color="red" /></button></>
  }
}

export default ButtonFactory
