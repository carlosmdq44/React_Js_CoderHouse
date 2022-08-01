import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Home from './views/Home';
import Contact from './views/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home />}/>
        <Route path="product/:id" element={<Detail/>} />
        <Route path="/Contact" element={ < Contact /> } />
        <Route path="*" element={<div>
            <h1>Error la pagina no se encuentra</h1>
          </div>} />
        </Route>
    </Routes>
  </Router>
);