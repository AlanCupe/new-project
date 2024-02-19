import {React, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Count from '../Count/Count';
import { CarritoContext } from '../../context/CarritoContext';


const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad , setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext (CarritoContext)
  const manejadorCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio, img};
    agregarProducto(item, cantidad)

  }
  return (
      <section className='productos'>
        <article className='card'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio:{precio}</p>
        <p>Stock: {stock}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis fuga veniam libero dolor! Ex, sunt aliquam! Obcaecati magni accusamus neque laboriosam unde ipsam veniam odit cumque odio, deleniti praesentium.</p>
        {

        }
        {
          agregarCantidad > 0 ? (<button className='btnTerminarCompra'> <Link to="/cart">Terminar compra</Link></button>) : (<Count inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

        
        </article>
      </section>
     
    
  )
}

export default ItemDetail