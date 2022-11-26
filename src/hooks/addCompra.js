import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig';

const addCompra = async (total) => {
    const docRef = await addDoc(collection(db, 'compras'), {
        fecha: serverTimestamp(),
        total: total
    });
    return docRef.id;
};

export default addCompra ;