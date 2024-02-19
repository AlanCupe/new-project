import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";

import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState([]);
  const {idCategory}= useParams();
  useEffect(()=>{
    const Misproductos = idCategory? query(collection(db,"productos"), where("idCategoria","==",idCategory)): collection(db,"productos");
    getDocs(Misproductos)
    .then(respuesta => {
      const nuevosProductos = respuesta.docs.map( doc =>{
        return {id:doc.id, ...doc.data()}
      })
      setProductos(nuevosProductos);
    }) 
  },[idCategory])


  // useEffect(()=>{
  //   const fProducts = idCategory? getProductsCategory: getProductos;

  //   fProducts(idCategory).then(respuesta => {setProductos(respuesta)
      
 
  //   }).catch(error => console.log(error));
    
  //   },[idCategory])
    
  return (
    <div>
    
<ItemList productos={productos}/>
    
    </div>
  )
}

export default ItemListContainer
