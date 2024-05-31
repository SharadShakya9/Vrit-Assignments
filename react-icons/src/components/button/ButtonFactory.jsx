import React from 'react'
import IconFactory from '../icon/IconFactory'
import './button.css'
import { useState } from 'react'

const ButtonFactory = ({type}) => {
    const [isSubscribe, setIsSubscribe] = useState(false)

    const handleSubscribe = () => {
        setIsSubscribe(!isSubscribe)
    }

  switch (type) {
    case "subscribe": return (
        <>
            <button className='subscribe' onClick={handleSubscribe}>
                {isSubscribe ? <IconFactory iconName="bell-regular" color="white" /> : <IconFactory iconName="bell-solid" color="white" /> } Subscribe</button>
        </>
    )
    case "download": return <><button className='download'>Download</button></>
    case "loading": return <><button className='loading'>Loading</button></>
    case "play": return <><button className='play'>Play</button></>
    case "logout": return <><button className='logout'>Logout</button></>
    case "love": return <><button className='love'>Love</button></>
    default: return <><button className='default'>Default</button></>
  }
}

export default ButtonFactory
