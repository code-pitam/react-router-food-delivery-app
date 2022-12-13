import React from 'react'

const Foodcart = (props) => {
  return (
    <div className='f-cart'>
    <img src={props.src} alt="" className="cart-img" />
    <h3>{props.name}</h3>
    <div className="lower">
        <p>{props.des}</p>
        <p>{props.price}</p>
    </div>
    </div>
  )
}

export default Foodcart