import React from 'react';
import { getOneProduct } from '../../asyncmock';
import Count from '../Count/Count';
const ItemDetail = ({id, nombre, precio, img, stock}) => {
  return (
      <section className='productos'>
        <article className='card'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio:{precio}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis fuga veniam libero dolor! Ex, sunt aliquam! Obcaecati magni accusamus neque laboriosam unde ipsam veniam odit cumque odio, deleniti praesentium.</p>
        <Count stock={stock}/>
        <button className='btnItem'>Agregar al carrito</button>
        </article>
      </section>
     
    
  )
}

export default ItemDetail