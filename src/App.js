import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail';
import Contact from './views/Contact';
import CartContextProvider from './context/CartContext';
import Cart from './cart/Cart';
import Category from './views/Category.js';
import NavBar1 from './components/NavBar1';
import UncontrolledExample from './components/UncontrolledExample';
import ItemListCategory from './components/ItemListCategory';
import './firebase';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
    <CartContextProvider>
       <BrowserRouter>
           <NavBar1 />
           <NavBar />
           <UncontrolledExample />
           <Routes>
             <Route path="/" element={<ItemListContainer greetings="Bienvenidos a E-Commerce Mundo de Ventas" />} />
              <Route index element={<Home />}/>
              <Route path="product/:idProduct" element={<ItemDetailContainer/>} />
              <Route path="product/category/:Idcategory" element={<ItemListCategory/>} />
              <Route exact path="/Cart" element={<Cart/>}/>	
              <Route path="/Contact" element={ < Contact /> } />
           </Routes>
         </BrowserRouter>
        </CartContextProvider>     
     </>
   );
 }
 
export default App;
