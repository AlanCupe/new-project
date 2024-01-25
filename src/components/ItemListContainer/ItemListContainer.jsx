import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import { getProductos, getProductsCategory} from '../../asyncmock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState([]);
  const {idCategory}= useParams();
  useEffect(()=>{
    const fProducts = idCategory? getProductsCategory: getProductos;

    fProducts(idCategory).then(respuesta => {setProductos(respuesta)
      
 
    }).catch(error => console.log(error));
    
    },[idCategory])
    
  return (
    <div>
    
<ItemList productos={productos}/>
    
    </div>
  )
}

export default ItemListContainer
