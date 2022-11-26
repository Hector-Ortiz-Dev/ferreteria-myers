import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig';

const addCompra = async (total) => {
    const docRef = await addDoc(collection(db, 'compras'), {
        fecha: serverTimestamp(),
        total: total
    });
    console.log('Producto actualizado');
    return docRef.id;
};

export default addCompra ;