import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
const ItemList = ({productos}) => {
  return (
    <>
        <h2 className='categorias'>Productos</h2>
        <section className='productos'>
        {productos.map(producto=><Item key={producto.id} {...producto}/>)}
        </section>
      
       
    </>
  )
}

export default ItemList