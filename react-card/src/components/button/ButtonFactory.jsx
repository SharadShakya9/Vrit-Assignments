import React from 'react'
import './button.css'

const ButtonFactory = ({type}) => {
    switch (type) {
        case "add-to-cart": return <button className='cart-btn'>Add to Cart</button>
        default: return <button>Button</button>
    }
}

export default ButtonFactory
