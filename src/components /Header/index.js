 import React from "react";
 import './style.scss';
 import logoAcessaBR from '../../images/logoAcessaBR.svg';
 import logoebac from '../../images/logoebac.svg';

 const Header = () => {
     return(
         <header className="header__container">            
             <div className="header__logo--state">
             <span>
                / Sorocaba, SP
             </span>                  
                <img src="{logoAcessaBR}" alt="logo AcessaBR"/>
             </div>
             <div className="header__logo--ebac">
                 <span>
                     Apoio:
                 </span>
                <img src="{logoebac}" alt="logo Ebac"/>                 
             </div>
         </header>
     )
 }
