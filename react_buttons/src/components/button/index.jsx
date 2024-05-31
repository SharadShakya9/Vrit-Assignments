import { Button } from 'antd'
import "./button.css"
import facebookLogo from "../../assets/facebook.png"
import instagramLogo from "../../assets/instagram.png"
import linkedinLogo from "../../assets/linkedin.png"
import youtubeLogo from "../../assets/youtube.png"
import globeLogo from "../../assets/worldwide.png"
import amongLogo from "../../assets/among_us.png"
import amongToggleLogo from "../../assets/impostor.png"
import upArrowLogo from "../../assets/uparrow.png"
import { useState } from 'react'

const ButtonFactory = ({ type }) => {
    const [expanded, setExpanded] = useState(false)
    const [isToggled, setIsToggled] = useState(false)

    const expand = () => {
        setExpanded(!expanded)
    }

    const handleToggle = () => {
        setIsToggled(!isToggled)
    }
    
  switch (type) {
    case "socials": return (
        <div className='social-container'>
            <button className='socials' onClick={expand}><img src={globeLogo} alt="social" className='icon social'  /></button>
            <div id="logos" className={`collapse ${expanded ? 'active' : ''}`}>
                {expanded && (
                    <>
                        <a href="https://www.facebook.com" target='_blank'><img src={facebookLogo} alt='facebook' className='icon logo facebook'  /></a>
                        <a href="https://www.instagram.com" target='_blank'><img src={instagramLogo} alt='instagram' className='icon logo instagram' /></a>
                        <a href="https://www.linkedin.com" target='_blank'><img src={linkedinLogo} alt='linkedin' className='icon logo linkedin' /></a>
                        <a href="https://www.youtube.com" target='_blank'><img src={youtubeLogo} alt='youtube' className='icon logo youtube' /></a>
                    </>
                )}
                
            </div>
        </div>
    )
    case "antd": return <Button type="primary">Button</Button>
    case "amongus": return (
        <div className='social-container'>
            <button className="image-button" onClick={handleToggle}><img src={isToggled ? amongToggleLogo : amongLogo} alt="among us" className="among-us" /></button>
        </div>
    )
    case "back-to-top": return (
        <>
            <button className="top-button">
                <a href='#'><img src={upArrowLogo} alt="top" className='icon' /></a>
            </button>
        </>
    )
    default: return (
        <>
            <button>Default</button>
        </>
    )
  }
}

export default ButtonFactory
