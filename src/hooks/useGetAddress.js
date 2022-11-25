import {useState, useEffect} from 'react'
import { db } from '../firebase/firebaseConfig';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const useGetAddress = (id_usuario) => {
    const [address, changeAddress] = useState([]);

    useEffect(() => {
        const consult = query(
            collection(db, 'direcciones'),
            where('usuario', '==', id_usuario)
        );

        const unsuscribe = onSnapshot(consult, (snapshot) => {
            changeAddress(snapshot.docs.map((direccion) => {
                return {...direccion.data(), id: direccion.id}
            }));
        });

        return unsuscribe;
    }, [id_usuario]);

    return [address];
}
 
export default useGetAddress;