import React, { useState } from 'react'
import "./Count.css";

const Count = ({stock, inicial, funcionAgregar}) => {
    const [contador,setContador] = useState(1);
    
    const contadorNext = (stock) =>{
        stock>contador&& setContador(contador +1);
    }
    const contadorBack = e =>{
        
        contador>inicial && setContador(contador-1);
    }
  return (
    <>
     <div className='contador'> 
    <button className='button' onClick={e=>contadorBack(stock)}><i className="bi bi-caret-left"></i></button>
    <p>{contador}</p> 
    <button className="button" onClick={e=>contadorNext(stock)}><i className="bi bi-caret-right"></i></button>
    </div>
    <button className='btnItem' onClick={e=>funcionAgregar(contador)}>Agregar al carrito</button>
    
    </>
   
    
  )
}

export default Count