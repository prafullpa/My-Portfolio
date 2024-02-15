import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiFillProject} from 'react-icons/ai'
import {IoMdContacts} from 'react-icons/io'
import './Nav.css'
function Nav() {
  const[activeNav,setActive]=useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>setActive('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActive('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
      <a href='#skill' onClick={()=>setActive('#skill')} className={activeNav === '#skill' ? 'active':''}><BiBook/></a>
      <a href='#project' onClick={()=>setActive('#project')} className={activeNav === '#project' ? 'active':''}><AiFillProject/></a>
      <a href='#contact' onClick={()=>setActive('#contact')} className={activeNav === '#contact' ? 'active':''}><IoMdContacts/></a>
    </nav>
  )
}

export default Nav
