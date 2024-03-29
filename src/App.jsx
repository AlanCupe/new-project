import React from 'react';
import MyNavbar from './components/MyNavbar/MyNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>

        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

