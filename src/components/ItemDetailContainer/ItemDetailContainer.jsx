import React, { useEffect, useState } from 'react';
import { db } from '../../services/config';
import {getDoc, doc} from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetai';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();
    useEffect(()=>{
const nuevoDoc = doc (db, "productos", idItem)
getDoc(nuevoDoc)
.then(respuesta=>{
  const nuevoProducto = {id:respuesta.id, ...respuesta.data()};
  setProducto(nuevoProducto);
})

    },[idItem])
    return (
       
    <><ItemDetail {...producto}/></>
  )
}

export default ItemDetailContainer