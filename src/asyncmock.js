const productos=[
    {id:'1',nombre: "GPS-VEHICULOS", precio: 180, img: "../img/productos/GPS-VEHICULOS.jpeg", idCategory:"vehiculos", stock:10},
    {id:'2',nombre: "GPS-NIÑOS", precio: 200, img: "../img/productos/GPS-NIÑOS.jpeg", idCategory:"niños", stock:15},
    {id:'3',nombre: "GPS-ADULTOS", precio: 470, img: "../img/productos/GPS-ADULTO.webp", idCategory:"adultos", stock:10},
    {id:'4',nombre: "GPS-MASCOTAS", precio: 500, img: "../img/productos/GPS-MASCOTAS.jpeg", idCategory:"mascotas", stock:20}
];

export const getProductos=()=>{
return new Promise((resolve)=>{
    setTimeout(() => {
        resolve(productos);
    }, 2000)


    
})
}

export const getOneProduct =(id)=>{
return new Promise(resolve => {
    setTimeout(()=>{
        const producto = productos.find(prod => prod.id ===id);
        resolve(producto);
    },2000);
})
}

export const getProductsCategory = (idCategory)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const productsCategory=productos.filter(prod =>prod.idCategory ===idCategory);
            resolve(productsCategory);
        },2000)
    })
}