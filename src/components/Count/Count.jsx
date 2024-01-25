import React, { useState } from 'react'
import "./Count.css";

const Count = ({stock}) => {
    const [contador,setContador] = useState(1);
    
    const contadorNext = (stock) =>{
        stock>contador&& setContador(contador +1);
    }
    const contadorBack = e =>{
        
        contador>1 && setContador(contador-1);
    }
  return (
    <div className='contador'> 
    <button className='button' onClick={e=>contadorBack(stock)}><i className="bi bi-caret-left"></i></button>
    <p>{contador}{console.log(contador)}</p> 
    <button className="button" onClick={e=>contadorNext(stock)}><i className="bi bi-caret-right"></i></button>
    </div>
  )
}

export default Count