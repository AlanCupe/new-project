import { useState, createContext } from "react";

export const CarritoContext = createContext(
    {carro:[],
        total: 0,
        cantidadTotal:0
    }
)

export const CarritoProvider = ({children}) =>{
    const [carro, setCarro] = useState([]);
    const [total, setTotal]= useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    const existente = ()=>{
        const carritoActualizado = carro.map(producto =>{
            if(producto.item.id ===item.id){
                return {...producto, cantidad: producto.cantidad + cantidad};

            } else{
                return producto;
            }
        })
        setCarro(carritoActualizado); 
        setCantidadTotal(prev=> prev + cantidad);
        setTotal(prev => prev+(item.precio*cantidad));
    }

    console.log(carro);
    console.log("Monto total de la compra: ", total);
    console.log("Cantidad de items: ",cantidadTotal)


    const agregarProducto = (item, cantidad) =>{
        const productoExistente = carro.find(producto => producto.item.id ===item.id)

        !productoExistente ?(setCarro(prev => [...prev,{item,cantidad}]), 
                            setCantidadTotal(prev=> prev + cantidad), 
                            setTotal(prev => prev+(item.precio*cantidad)) ) :existente

        
    }
    
    const eliminarProducto = (id) =>{
        const productoEliminado = carro.find (producto => producto.item.id ===id);

        const carroActualizado = carro.filter (producto => producto.item.id !== id);

        setCarro(carroActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.cantidad*productoEliminado.item.precio));
    }
    
    const vaciarCarro = () =>{
        setCarro([]);
        setTotal(0);
        setCantidadTotal(0);
    }

    return(
    <CarritoContext.Provider value={{carro, agregarProducto, eliminarProducto, vaciarCarro, total, cantidadTotal}}>
        {children}
    </CarritoContext.Provider>
    )
}
