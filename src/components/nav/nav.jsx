import React from 'react'
import './nav.css'
import { TbHomeSignal } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import  { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ''}><TbHomeSignal  /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ''}><FaRegUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ''}><AiOutlineBook /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "active" : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}><AiOutlineMessage /></a>
    </nav>
  );
};

export default Nav;