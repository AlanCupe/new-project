import {React, useContext} from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import "./Cart.css";

const Cart = () => {
    const {carro, vaciarCarro, total, cantidadTotal} = useContext(CarritoContext);
  
    return (
        <>
            {cantidadTotal === 0 ? (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to="/">Ver Productos</Link>
                </>
            ) : (<>
                <div className='productos'>
                  {carro.map(producto => <CartItem key={producto.id}  {...producto} />)}
                   
                    
                    
               
                </div>
                <div className='btnCarro'>
                <button onClick={e => vaciarCarro()}>Vaciar Carrito</button>
                <button> <Link to="/checkout">Finalizar Compra</Link></button> 
                </div>
                </>
            )}
        </>
    )
}

export default Cart;
