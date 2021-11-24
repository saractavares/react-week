import React from "react";
import './style.scss';
import pessoas from './../Body/images/imagem.svg';
import ceagesp from './../Body/images/ceagesp-sorocaba.jpg';
import iguatemi from './../Body/images/iguatemi-esplanada.jpg';
import jardim from './../Body/images/jardim (1).jpg';

import braile from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/icon-braile.svg';
import audicao from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/audicao.svg';
import banheiro from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/banheiro.svg';
import caoguia from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/caoguia.svg';
import elevador from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/elevador.svg';
import estacionamento from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/estacionamento.svg';
import libras from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/libras.svg';
import piso from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/piso-tatil.svg';
import porta from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/porta-larga.svg';
import rampa from '/home/sarat/Área de Trabalho/react-week/acessai/src/images-icons/rampa.svg';



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
                <div className="body__escolha">
                    <span>
                        Escolha onde ir :
                    </span>
                </div>
                <div className="body__options">

                    <button className="body__button active">
                        <span className="body__span">
                            Praça
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Parque
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Igreja
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Hotel
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Restaurante
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Zoológico
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Farmácia
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Loja
                        </span>
                    </button>
                    <button className="body__button">
                        <span className="body__span">
                            Aquário
                        </span>
                    </button>
                </div>

            </div>


            <div class="body__row">
                <div class="body__column">
                    <div className="body__descriptions">
                        <img className="body__card_img" src={ceagesp} alt="Snow" />
                        <div class="body__card">
                            <h2 className="body__h2">Ceagesp </h2>
                        </div>
                        <div className="body__icons">
                            {/* <img className='body__img-icon-checado' src={braile} alt='icone braile' width='40px' /> */}
                            <img className='body__img-icon-checado' src={braile} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={audicao} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={banheiro} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={elevador} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={estacionamento} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={caoguia} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={piso} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={rampa} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={porta} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={libras} alt='icone braile' width='40px' />
                        </div>
                        <div>
                        <p className="body__p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis vestibulum faucibus. In ac libero mi. Aliquam dignissim interdum turpis quis bibendum. Phasellus lobortis non velit ut porttitor. Sed ac turpis sapien. Vivamus ac rutrum metus. Nam varius pellentesque quam, vitae eleifend leo fringilla sit amet. Fusce auctor faucibus imperdiet. Suspendisse eget ligula quis sapien porttitor dictum eu ac ligula. </p>
                        </div>
                        
                        <div className='body__como-chegar'>
                            <a className='body__a' href='https://www.google.com/search?q=maps+ceagesp+sorocaba&oq=maps+ceagesp+sorocaba&aqs=chrome..69i57.4872j0j1&sourceid=chrome&ie=UTF-8#'>Como chegar</a>
                        </div>
                    </div>
                </div>
                <div class="body__column">
                    <div className="body__descriptions">
                        <img className="body__card_img" src={iguatemi} alt="Forest" />
                        <div class="body__card">
                            <h2 className="body__h2">Iguatemi Esplanada </h2>
                        </div>
                        <div className="body__icons">
                            <img className='body__img-icon-checado' src={braile} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={audicao} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={banheiro} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={elevador} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={estacionamento} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={caoguia} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={piso} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={rampa} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={porta} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={libras} alt='icone braile' width='40px' />

                        </div>
                        <div>
                        <p className="body__p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis vestibulum faucibus. In ac libero mi. Aliquam dignissim interdum turpis quis bibendum. Phasellus lobortis non velit ut porttitor. Sed ac turpis sapien. Vivamus ac rutrum metus. Nam varius pellentesque quam, vitae eleifend leo fringilla sit amet. Fusce auctor faucibus imperdiet. Suspendisse eget ligula quis sapien porttitor dictum eu ac ligula. </p>
                        </div>
                        
                        <div className='body__como-chegar'>
                            <a className='body__a' href='https://www.google.com/search?q=maps+ceagesp+sorocaba&oq=maps+ceagesp+sorocaba&aqs=chrome..69i57.4872j0j1&sourceid=chrome&ie=UTF-8#'>Como chegar</a>
                        </div>
                    </div>
                </div>
                <div class="body__column">
                    <div className="body__descriptions">
                        <img className="body__card_img" src={jardim} alt="Mountains" />
                        <div class="body__card">
                            <h2 className="body__h2">Jardim Botânico </h2>
                        </div>
                        <div className="body__icons">
                            <img className='body__img-icon-nao-checado' src={braile} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={audicao} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={banheiro} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={elevador} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={estacionamento} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={caoguia} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={piso} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={rampa} alt='icone braile' width='40px' />
                            <img className='body__img-icon-checado' src={porta} alt='icone braile' width='40px' />
                            <img className='body__img-icon-nao-checado' src={libras} alt='icone braile' width='40px' />

                        </div>
                        <div>
                        <p className="body__p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis vestibulum faucibus. In ac libero mi. Aliquam dignissim interdum turpis quis bibendum. Phasellus lobortis non velit ut porttitor. Sed ac turpis sapien. Vivamus ac rutrum metus. Nam varius pellentesque quam, vitae eleifend leo fringilla sit amet. Fusce auctor faucibus imperdiet. Suspendisse eget ligula quis sapien porttitor dictum eu ac ligula. </p>
                        </div>
                        
                        <div className='body__como-chegar'>
                            <a className='body__a' href='https://www.google.com/search?q=maps+ceagesp+sorocaba&oq=maps+ceagesp+sorocaba&aqs=chrome..69i57.4872j0j1&sourceid=chrome&ie=UTF-8#'>Como chegar</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}