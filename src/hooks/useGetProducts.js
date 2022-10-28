import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../contexts/AuthContext';
import { collection, onSnapshot, query, orderBy, where, limit } from 'firebase/firestore';

const useGetProducts = () => {
    const [products, changeProducts] = useState([]);

    useEffect(() => {
        const consult = query(
            collection(db, 'productos'),
            where('categoria', '==', 'Jardin'),
            limit(5)
        );

        const unsuscribe = onSnapshot(consult, (snapshot) => {
            changeProducts(snapshot.docs.map((producto) => {
                return {...producto.data(), id: producto.id}
            }));
        });
        
        return unsuscribe;
    }, []);

    return [products];
}
 
export default useGetProducts;