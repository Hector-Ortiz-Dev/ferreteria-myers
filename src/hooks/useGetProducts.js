import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, limit, orderBy } from 'firebase/firestore';

const useGetDashGarden = () => {
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

const useGetDashPlumbing = () => {
    const [products, changeProducts] = useState([]);

    useEffect(() => {
        const consult = query(
            collection(db, 'productos'),
            where('categoria', '==', 'Plomeria'),
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

const useGetDashNews = () => {
    const [products, changeProducts] = useState([]);

    useEffect(() => {
        const consult = query(
            collection(db, 'productos'),
            orderBy('fecha', 'desc'),
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
 
export {useGetDashGarden, useGetDashPlumbing, useGetDashNews};