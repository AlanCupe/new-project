import {React, useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import "./Checkout.css";
const Checkout = () => {
    const {carro,vaciarCarro, total} = useContext(CarritoContext);
    const [nombre,setNombre]=useState("");
    const [apellidos,setApellidos]=useState("");
    const [telefono,setTelefono]=useState("");
    const [email,setEmail]=useState("");
    const [emailConfirmacion,setEmailConfirmacion]=useState("");
    const [ordenId, setOrdenId]= useState("");
    const [error, setError]=useState("");
    
    
    const manejadorSubmit=e=>{
        e.preventDefault();
        if(!nombre || !apellidos||!telefono||!email||!emailConfirmacion){
            setError("Por Favor completa todos los Campos");
            return;
        }
        if(email!==emailConfirmacion){
            setError("Los Email no coinciden");
            return;
        }

        const orden = {
            items:carro.map(producto =>(
                {
                    id:producto.item.id,
                    nombre:producto.item.nombre,
                    cantidad:producto.cantidad,
                }
            )),
            total:total,
            fecha: new Date(),
            nombre,
            apellidos,
            telefono,
            email
        }

    

        Promise.all(
            orden.items.map( async (productoOrden) => {
               
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
               
                await updateDoc(productoRef, {stock: stockActual - productoOrden.cantidad});
                
            })
        )
        .then(()=> {
            addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id);
                    vaciarCarro();
                   Swal.fire({
                    title: "¡Orden Generada con Exito!",
                    text:`Gracias por su Preferancia. Su numero de Orden es: ${docRef.id}`,
                    icon:"success",
                   })
                })
                .catch(error => console.log("Error al crear la orden", error))
        })
        .catch(error => {
            console.log("No pudimos actualizar el stock", error);
            setError("Error al actualizar el stock");
        })
    }


  return (
    <div className='checkout'>
        <h2>Checkout-Finalizando Compra</h2>

        <form onSubmit={manejadorSubmit} className='formulario'>
        {
            carro.map(producto =>(
                <div>
                <p>{producto.item.nombre} X {producto.cantidad}</p>
                <p>{producto.item.precio}</p>
                <hr/>
                </div>
            ))
        }
        
        <input type="text" placeholder='Nombre' id='nombre' onChange={e=>setNombre(e.target.value)} />

        <input type="text" placeholder='Apellido' id='apellido'  onChange={e=>setApellidos(e.target.value)} />

      
        <input type="text" placeholder='Telefono' id='telefono' onChange={e=>setTelefono(e.target.value)} />

    
        <input type="email" placeholder='Email' id='email' onChange={e=>setEmail(e.target.value)} />

       
        <input type="email" placeholder='Confirmar Email' id='emailConfirmacion' onChange={e=>setEmailConfirmacion(e.target.value)} />
        {
            error && <p>{error}</p>
        }
        <button>Finalizar Orden</button>

        {ordenId && <strong>Gracias por tu compra!, tu numero de orden es: {ordenId}</strong>}

        </form>
    </div>
  )
}

export default Checkout