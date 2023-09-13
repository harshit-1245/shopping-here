import React from 'react'
import {MdClose} from "react-icons/md";
import prod from "../../../assets/product/headphone4.webp";
import "./CartItem.scss";
function CartItem() {
  return (
    <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                {/* this would change dynamically as we select products */}
                <span className='name'>product name</span>
                <MdClose className='close-btn'/>
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span>&#8377;6789</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem
