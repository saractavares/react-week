 import React from "react";
 import './style.scss';
 import acessaBR from '../../images/acessaBR.svg';
 import logoebac from '../../images/logo-ebac.svg';
//  const logoEbac = require('../../images/logoebac.svg')
//  const acessaBR = require('../../images/acessaBR.png')

 export const Header = () => {
     return(
         <header className="header__container">            
             <div className="header__logo header__logo--state">              
             ⠀⠀⠀⠀  <img src={acessaBR} alt="logo AcessaBR"/>
                        <span className="header__city">
                        ⠀/ Sorocaba, SP 
                        </span> 
             </div>
             
             <div className="header__logo--ebac">
                <span className="header__span">
                    Apoio:⠀
                </span>
                    <img src={logoebac} alt="logo Ebac"/>                 
             </div>
         </header>
     )
 }
 