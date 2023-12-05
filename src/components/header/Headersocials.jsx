import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { LiaGithubSquare } from "react-icons/lia"; 

const Headersocials = () => {
    return (
      <div>
        <div className="header__socials">
          <a href='https://www.linkedin.com/in/saad-ali-abbasi' ><BsLinkedin /></a>
          <a href='https://github.com/Saadabbasi12' ><LiaGithubSquare /></a>
        </div>
      </div>
    );
  };
  
  export default Headersocials;