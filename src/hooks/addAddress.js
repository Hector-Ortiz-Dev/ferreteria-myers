import { addDoc, collection } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig';

const addAddress = async (user_id, street, number, numberInt, colony, zipCode, city, state) => {
    console.log('Ejecutando AddAddress');
    
    try{
    console.log(user_id, street, number, numberInt, colony, zipCode, city, state);
    await addDoc(collection(db, 'direcciones'),{
        calle: street,
        ciudad: city,
        codigo: zipCode,
        colonia: colony,
        estado: state,
        numero: number,
        numeroInt: numberInt,
        usuario: user_id,
    });
    console.log('Documento agregado');
}
    catch(error){
        console.log(error);
    }
}

export default addAddress