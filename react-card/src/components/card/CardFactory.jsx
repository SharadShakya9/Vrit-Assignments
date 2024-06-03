import React from 'react'
import './card.css'
import ButtonFactory from '../button/ButtonFactory'

const CardFactory = ({image, title, description, price}) => {
  if ( image && title && description ) {
    return (
    <>
      <div className='card'>
        <div className='image'><img src={image} alt="product-image" /></div>
        <div className='card-content'>
          <div className='title'><h1>{title}</h1></div>
          <div className='description' ><span>{description}</span></div>
          <div className='price-tag'>
            <div className='price'>
              <span>{price ? '$' : ''}</span><span>{price || "Free"}</span>
            </div>
            <div className="cart-button">
              <ButtonFactory type="add-to-cart" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
  } else {
    return <></>
  }
}

export default CardFactory
