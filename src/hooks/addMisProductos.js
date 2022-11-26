import { addDoc, collection } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig';

const addMisProductos = (id_usuario, producto, cantidad) => {
    console.log('Deploy addMisProductos');

    try{
        addDoc(collection(db, 'misProductos'),{
        usuario: id_usuario,
        id_producto: producto.id,
        cantidad: cantidad,
        imagen: producto.imagen,
        marca: producto.marca,
        nombre: producto.nombre,
        pagado: false,
        precio: producto.precio
    });
    console.log('Producto agregado al carrito');
    }
    catch(e){
        console.log(e);
    }
};
 
export default addMisProductos;