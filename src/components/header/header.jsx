import React from 'react';
import './header.css';
import Cta from './cta'; // Make sure the import uses PascalCase (capitalized) convention for components
import ME from '../../assets/my_pic.png'
import Headersocials from './Headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Saad Abbasi</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Cta /> 
        <Headersocials />
       
        <div className='me'>
          <div className='me_img'>
            <img src={ME} alt='me'  />
          </div>
          
          </div>
          <div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
          </div>
        </div>
      
    </header>
  );
};

export default Header;