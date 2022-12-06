import React from 'react';
import './header.css';
import DownloadAction from './DownloadAction';
import ME from '../../assets/profilepic.jpg';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
   <header>
    <div className='container header_container'>
        <h5>Hi I'm</h5>
        <h1>Surya</h1>
        <h5 className="text-light">Software Developer</h5>
        <DownloadAction/>
        <HeaderSocials/>
       
        <div class="circular--landscape">
        <img src ={ME}></img>
        </div>
      
        <a href='#contact' className='scroll_down'>Scroll Down</a>

    </div>
   </header>
  )
}

export default Header