import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, limit, orderBy, connectFirestoreEmulator } from 'firebase/firestore';

const useGetMisProductos = (user) => {
    const [products, changeProducts] = useState([]);

    useEffect(() => {
        if (user != null)
        {
        const consult = query(
            collection(db, 'misProductos'),
            where('usuario', '==', user.uid),
            where('pagado', '==', false)
        );

        const unsuscribe = onSnapshot(consult, (snapshot) => {
            changeProducts(snapshot.docs.map((producto) => {
                return {...producto.data(), id: producto.id}
            }));
        });
        
        return unsuscribe;
        }
    }, [user]);

    //console.log(products);

    return [products];
}

export { useGetMisProductos };