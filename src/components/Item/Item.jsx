import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Count from '../Count/Count';

const Item = ({id, nombre, precio, img,stock}) => {
  return (
    <article className='card'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio:{precio}</p>
      
        <button className='btnItem'> 
          <Link to={`/item/${id}`}>
          Ver Detalles
          </Link>
          </button>
    </article>
  )
}

export default Item