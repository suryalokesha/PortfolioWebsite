import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import './nav.css';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} alt='Home' className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#')} alt='About' className={activeNav === 'about' ? 'active':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#')} alt='Experience' className={activeNav === 'experience' ? 'active':''} ><BiBook/></a>
      <a href='#services'  onClick={()=>setActiveNav('#')} alt='Services' className={activeNav === 'services' ? 'active':''}><RiServiceLine/></a>
      <a href='#contact'  onClick={()=>setActiveNav('#')} alt='Contact' className={activeNav === 'contact' ? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav