import React, {useState, useContext, useEffect} from 'react'
import { auth } from './../firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth';

//Crear contexto
const AuthContext = React.createContext();

//Hook para acceder al contexto
const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, changeUser] = useState();

    //Creamos un state para saber cuando termina de
    //cargar la comprobacion de onAuthStateChanged
    const [loading, changeLoading] = useState(true);

    //Efecto para ejecutar la comprobacion una sola vez
    useEffect(() => {
        //Comprobamos si hay usuario
        const cancelSubscribed = onAuthStateChanged(auth, (user) => {
            changeUser(user);
            changeLoading(false);
        });

        return cancelSubscribed;
    }, []);

    return ( 
        <AuthContext.Provider value={{user: user}}>
            {!loading && children}
        </AuthContext.Provider>
     );
}
 
export {AuthProvider, AuthContext, useAuth};