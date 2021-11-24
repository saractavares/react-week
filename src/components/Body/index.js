import React from "react";
import './style.scss';
import pessoas from './../Body/imagem.svg';
import ceagesp from './../Body/ceagesp-sorocaba.jpg';
import iguatemi from './../Body/iguatemi-esplanada.jpg';
import jardim from './../Body/jardim (1).jpg';
// import acessibilidade from './../Body/acessibilidade.png';

export const Body = () => {
    return (
        <body className="body__container">
            <div className="body__wrapper">
                <span className="body__title">
                    Sorocaba Para Todos
                </span>

                <span className="body__content">
                    Nossa missão é facilitar o encontro entre
                    lugares inclusivos e pessoas que buscam
                    alternativas culturais para sair de casa,
                    com a mobilidade que todo cidadão precisa. <br />
                    Checamos 10 itens essenciais de acessibilidade
                    para pessoas com deficiência em diversos
                    pontos da cidade. <br />
                    <img className="body__img" src={pessoas} alt="imagem" />
                </span>
            </div>

            <div class="body__row">
                <div class="body__column">
                    <div className="body__descriptions"> 
                        <img src={ceagesp} alt="Snow"/>
                        <div class="body__card">
                            <h2>Ceagesp</h2>
                        </div>
                    </div>
                </div>
                <div class="body__column">
                <div className="body__descriptions"> 
                    <img src={iguatemi} alt="Forest"/>
                        <div class="body__card">
                            <h2>Iguatemi Esplanada</h2>
                        </div>
                    </div>
                </div>
                <div class="body__column">
                    <div className="body__descriptions"> 
                        <img src={jardim} alt="Mountains"/>
                        <div class="body__card">
                            <h2>Jardim Botânico  </h2>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}