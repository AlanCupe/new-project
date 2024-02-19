import { React, useContext } from 'react';
import './CartWidget.css';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <>
      <Link to={"/cart"}>
        <span className="cardWidget d-block mx-4"><img src="../img/anadir-a-la-cesta.png" />
          {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
        </span>
      </Link>

    </>
  )
}

export default CartWidget
