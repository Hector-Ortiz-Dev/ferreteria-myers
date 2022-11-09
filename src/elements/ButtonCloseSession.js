import React from 'react'
import Button from './Button'
import {auth} from './../firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const ButtonCloseSession = () => {
    const navigate = useNavigate();

    const closeSession = async() => {
        try{
            await signOut(auth);
            navigate('/LogIn');
        } catch(error){
            console.log(error);
        }
    }

    return (
        <Button CloseSession onClick={closeSession}>
            Cerrar sesión
        </Button>
    );
}
 
export default ButtonCloseSession;