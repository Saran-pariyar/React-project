import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  //the work of BrowserRouter is to: we have to put the component that we want to show/render in the browser
  <BrowserRouter>
    <App />
    </BrowserRouter> 
  
  ,
  document.getElementById('root')
);

