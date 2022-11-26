import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, limit, orderBy, connectFirestoreEmulator } from 'firebase/firestore';

const useGetMisProductos = (id_usuario) => {
    const [products, changeProducts] = useState([]);

    useEffect(() => {
        const consult = query(
            collection(db, 'misProductos'),
            where('usuario', '==', id_usuario),
            where('pagado', '==', false)
        );

        const unsuscribe = onSnapshot(consult, (snapshot) => {
            changeProducts(snapshot.docs.map((producto) => {
                return {...producto.data(), id: producto.id}
            }));
        });
        
        return unsuscribe;
    }, [id_usuario]);

    //console.log(products);

    return [products];
}

export { useGetMisProductos };