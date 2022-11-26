import { db } from '../firebase/firebaseConfig';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

const updateAmount = async (id_MiProducto, amount) => {
    //console.log('Deploy updateAmount');

    await updateDoc(doc(db, 'misProductos', id_MiProducto),{
        cantidad: amount
    })
};

const deleteMiProducto = async (id_MiProducto) => {
    console.log('Deploy deleteMiProducto ' + id_MiProducto);

    try{
    await deleteDoc(doc(db, 'misProductos', id_MiProducto));
    } catch{
        console.log('Producto eliminado');
    }
};

export { updateAmount, deleteMiProducto };