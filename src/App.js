import React from 'react';
import NavBar from './components/Navs/NavBar';
import './App.css';
import ItemListContainer from './components/Items/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/Contact/Contact';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/cart/Cart';
import NavBar1 from './components/Navs/NavBar1';
import './firebase';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import FormBuyer from './components/Buyer/FormBuyer';
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
    <CartContextProvider>
       <BrowserRouter>
           <NavBar1 />
           <NavBar />
           <Routes>
             <Route  path="/" element={<ItemListContainer greetings="Bienvenidos a E-Commerce Mundo de Ventas"  />} />
              <Route path="product/:idProduct" element={<ItemDetailContainer/>} />
              <Route path="/category/:idCategory" element={<ItemListContainer greeting="Bienvenido a Mercado Libre!" />} />
              <Route exact path="/Cart" element={<Cart/>}/>	
              <Route exact path="/checkout" element={<FormBuyer/>}/>		
              <Route path="/Contact" element={ < Contact /> } />
           </Routes>
           <Footer />
         </BrowserRouter>
        </CartContextProvider>     
     </>
     
   );
 }
 
export default App;
