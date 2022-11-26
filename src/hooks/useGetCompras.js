import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';

const useGetCompras = (user) => {
    const [compras, changeCompras] = useState([]);
    
    useEffect(() => {
        if (user != null)
        {
        const consult = query(
            collection(db, 'compras'),
            where('usuario', '==', user.uid)
        );

        const unsuscribe = onSnapshot(consult, (snapshot) => {
            changeCompras(snapshot.docs.map((compra) => {
                return {...compra.data(), id: compra.id}
            }));
        });

        return unsuscribe;
        }
    }, [user]);

    return [compras];
}
 
export default useGetCompras;