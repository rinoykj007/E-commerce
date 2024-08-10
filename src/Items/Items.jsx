import React from 'react';
import "./items.css"

function Items(props) {
  return (
    <div className='item'>
        <img src={props.image} alt="" style={{width:"15rem"}} />
        <p className='item-name'> {props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
       
    </div>
  )
}

export default Items
