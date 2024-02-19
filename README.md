# Sistema de E-commerce - New Project

Este proyecto implementa un sistema de carro de ventas,checkout para una aplicación de comercio electrónico, permitiendo a los usuarios finalizar sus compras de manera eficiente y segura. Utiliza React para la interfaz de usuario, Firebase Firestore para el almacenamiento de datos, y SweetAlert2 para notificaciones amigables.



# Componente Carrito de Compras

El componente `Cart` se encarga de gestionar y mostrar el carrito de compras del usuario. Se encuentra en `src/components/Cart/Cart.jsx` y es una parte crucial de la experiencia de compra en nuestra aplicación.

## Características

- **Visualización del Carrito**: Muestra todos los productos que el usuario ha añadido al carrito. Cada producto se muestra con su respectiva información gracias al componente `CartItem`.

- **Gestión del Carrito**: Permite al usuario vaciar el carrito de compras completamente con un solo clic.

- **Navegación**: Ofrece enlaces para volver a la página de productos (`Ver Productos`) o proceder al proceso de checkout (`Finalizar Compra`).

- **Integración con Contexto**: Utiliza el `CarritoContext` para acceder y manipular el estado global del carrito, incluyendo la lista de productos añadidos, el total de la compra, y la cantidad total de productos.

## Uso

Este componente se renderiza en las rutas donde se requiere mostrar el carrito de compras. No necesita props adicionales ya que obtiene toda su información y funcionalidades a través del contexto `CarritoContext`.


## Dependencias

- `react-router-dom` para la navegación.
- `CarritoContext` para el manejo del estado global del carrito.

Este componente es esencial para proporcionar una experiencia de compra fluida y fácil de usar en nuestra aplicación.

## Comenzando

Para obtener una copia del proyecto en funcionamiento en tu máquina local, sigue estas instrucciones.

### Prerrequisitos

Necesitas tener instalado Node.js y npm en tu sistema. Puedes descargarlos desde [Node.js official website](https://nodejs.org/).

### Instalación

1. Clona el repositorio en tu máquina local:
git clone https://github.com/AlanCupe/new-project.git





## Construido con

- [React](https://reactjs.org/) - La biblioteca de UI utilizada
- [Firebase Firestore](https://firebase.google.com/docs/firestore) - Base de datos utilizada
- [SweetAlert2](https://sweetalert2.github.io/) - Para notificaciones amigables

## Contribuyendo

Si deseas contribuir a este proyecto, por favor envía un pull request con tus cambios para revisión.

