import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Contact from './views/Contact';
import Category from './views/Category';
import CartContextProvider from './context/CartContext';
import Cart from './cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <CartContextProvider>
       <BrowserRouter>
           <NavBar />
           <Routes>
             <Route path="/" element={<ItemListContainer greetings="Bienvenidos a E-Commerce Mundo de Ventas" />} />
              <Route index element={<Home />}/>
              <Route path="product/:id" element={<ItemDetailContainer/>} />
              <Route path="product/categories/:id" element={<Category/>} />
              <Route exact path="/cart" element={<Cart/>}/>	
              <Route path="/Contact" element={ < Contact /> } />
           </Routes>
         </BrowserRouter>
        </CartContextProvider>     
     </>
   );
 }
 
export default App;
