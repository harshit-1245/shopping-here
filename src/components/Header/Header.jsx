
import React, { useState } from "react"
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai" //this all are icons

import "./Header.scss"
import { useEffect } from "react"
import Cart from "../Cart/Cart"



function Header() {
  const [scrolled,setScrolled] =useState(false);
  // if show cart icon will show number then it'll be true
  //we are going to use onclick event,when you click on cart icon itll appear
  const [showCart,setShowCart]=useState(false);
  const handleScroll =()=>{
    const offset=window.scrollY
    if(offset>200){
      setScrolled(true)
    }else{
      setScrolled(false);
    }
    
  };
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
  })

  
  return (
    <>
    <header className={`main-header ${scrolled?'sticky-header':''}`}>
      <div className='header-content'>
        <ul className='left'>
          <li>Home</li>
        <li>About</li>
        <li>Catgories</li>
        </ul>
        <div className='center'>HarryStore</div>
        <div className='right'>
          <TbSearch/>
          <AiOutlineHeart/>
          {/* cart on click event  */}
          <span className='cart-icon' onClick={()=>setShowCart(true)}><CgShoppingCart/>
          <span>5</span>
          </span>
        </div>
      </div>
    </header>
    {/* pass setSHowCart as a prop so that we click close it value get false it will dissapear */}
    { showCart && <Cart setShowCart={setShowCart}/>}
    </>
  )
}

export default Header
