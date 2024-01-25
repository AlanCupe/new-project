import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetai';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();
    useEffect(()=>{
getOneProduct(idItem).then(res => setProducto(res))
    },[idItem])
    return (
       
    <><ItemDetail {...producto}/></>
  )
}

export default ItemDetailContainer