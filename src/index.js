import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import { Header } from './components/Header';
import { Body } from './components/Body';


// JSX javascript parecido com html = react

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header />
      <Body />
    </div>
  </div>,
  document.getElementById('root')
);
