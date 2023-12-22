import React from 'react';
import MyNavbar from './components/MyNavbar/MyNavbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <div>
      <MyNavbar/>
      <ItemListContainer greeting='Hola Mundo'/>
    </div>
  )
}

export default App

