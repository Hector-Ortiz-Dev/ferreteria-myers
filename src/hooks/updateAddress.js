import { updateDoc, doc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

const updateAddress = async (address_id, street, number, numberInt, colony, zipCode, city, state) => {
    console.log('Ejecutando UpdateAddress   ');
    
    await updateDoc(doc(db, 'direcciones', address_id),{
        calle: street,
        ciudad: city,
        codigo: zipCode,
        colonia: colony,
        estado: state,
        numero: number,
        numeroInt: numberInt
    })
}

export default updateAddress;