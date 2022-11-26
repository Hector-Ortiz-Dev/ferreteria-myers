import React, { useState } from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import UserIcon from '../images/user.png'
import { useAuth } from './../contexts/AuthContext'
import styled from 'styled-components'
import {FaUser, FaUserCog, FaHouseUser, FaShoppingBag} from 'react-icons/fa';
import {auth} from './../firebase/firebaseConfig'
import Button from '../elements/Button'
import Alert from './../elements/Alert'
import {updatePassword, updateProfile} from 'firebase/auth'
import useGetAddress from '../hooks/useGetAddress'
import updateAddress from '../hooks/updateAddress'
import addAddress from '../hooks/addAddress'
import useGetCompras from '../hooks/useGetCompras'
import {format, fromUnixTime} from 'date-fns'
import {es} from 'date-fns/locale'
import { useGetMisProductosComprados } from '../hooks/useGetMisProducts'
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [toggleState, setToggleState] = useState(1);

    const formatDate = (date) => {
        return(format(fromUnixTime(date), "dd 'de' MMMM 'del' yyyy hh:MM:ss", {locale: es}));
    }

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const [alert, changeAlert] = useState('');
    const [stateAlert, changeStateAlert] = useState(false);

    //-----Datos de usuario-----
    const [name, changeName] = useState('');
    const [password, changePassword] = useState('');
    const [password2, changePassword2] = useState('');

    //-----Datos de direcciones-----
    const [address] = useGetAddress(user.uid);
    const [street, changeStreet] = useState('');
    const [number, changeNumber] = useState('');
    const [numberInt, changeNumberInt] = useState('');
    const [colony, changeColony] = useState('');
    const [zipCode, changeZipCode] = useState('');
    const [city, changeCity] = useState('');
    const [state, changeState] = useState('');

    //-----Datos de compras-----
    const [compras] = useGetCompras(user);
    const [misProductos] = useGetMisProductosComprados(user);

    const handleChange = async (e) => {
        switch(e.target.name){
            case 'name':
                changeName(e.target.value);
                break;
            case 'password':
                changePassword(e.target.value);
                break;
            case 'password2':
                changePassword2(e.target.value);
                break;
            case 'street':
                changeStreet(e.target.value);
                break;
            case 'number':
                changeNumber(e.target.value);
                break;
            case 'numberInt':
                changeNumberInt(e.target.value);
                break;
            case 'colony':
                changeColony(e.target.value);
                break;
            case 'zipCode':
                changeZipCode(e.target.value);
                break;
            case 'city':
                changeCity(e.target.value);
                break;
            case 'state':
                changeState(e.target.value);
                break;
            default:
              break;
        }
      };

    const handleSubmitName = async (e) => {
      console.log('Ejecutando Handle Name');
    
      e.preventDefault();
      changeStateAlert(false);
      changeAlert({});

      if(name === '')
      {
          changeStateAlert(true);
          changeAlert({
              type: 'error',
              message: 'Ingresa el nuevo nombre'
          })
        return;
      }
      try{
          await updateProfile(auth.currentUser, {displayName: name});
          changeStateAlert(true);
          changeAlert({
              type: 'success',
              message: 'Nombre actualizado'
          });
            await delay(1000);
            window.location.reload();
            navigate('/Profile');
        }catch(error){
          changeStateAlert(true);
          changeAlert({type: 'error', message: error});
        }
      };

    const handleSubmitPassword = async (e) => {
        //console.log('Ejecutando Handle Password');
        
        e.preventDefault();
        changeStateAlert(false);
        changeAlert({});
    
        if(password === '' || password2 === '')
        {
            changeStateAlert(true);
            changeAlert({
                type: 'error',
                message: 'Ingresa la nueva contraseña'
            })
          return;
        }
        if(password !== password2)
        {
            changeStateAlert(true);
            changeAlert({
                type: 'error',
                message: 'Las contraseñas no coinciden.'
            })
          return;
        }
            await updatePassword(auth.currentUser, password).then(() => {
            changeStateAlert(true);
            changeAlert({
                type: 'success',
                message: 'Contraseña actualizada'
            });
            delay(1000);
            window.location.reload();
            }).catch((error) => {
            changeStateAlert(true);

            let message;

            switch(error.code){
                case 'auth/invalid-password':
                    message = 'La contraseña debe ser de al menos 6 caracteres';
                    break;
                default:
                    message = 'Hubo un error al intentar crear la cuenta';
                    console.log(error.code);
                    break;
            }
            changeAlert({type: 'error', message: message});
          });
        };

    const handleSubmitAddress = async (e) => {
        e.preventDefault();
        console.log('Ejecutando Handle Address');
        changeStateAlert(false);
        changeAlert({});

        if(street === '' ||
           number === '' ||
           colony === '' ||
           zipCode === '' ||
           city === '' ||
           state === ''
        ){ //Espacios vacios
            console.log('Espacios sin llenar');
            changeStateAlert(true);
            changeAlert({
              type: 'error',
              message: 'Ingresa todos los datos requeridos'
            })
            return;
        }
        else{
            if(address.length !== 0) //Si ya existe una direccion
            {
                updateAddress(
                    address[0].id,
                    street,
                    number,
                    numberInt,
                    colony,
                    zipCode,
                    city,
                    state);

                changeStreet('');
                changeNumber('');
                changeNumberInt('');
                changeColony('');
                changeZipCode('');
                changeCity('');
                changeState('');

                changeStateAlert(true);
                changeAlert({
                    type: 'success',
                    message: 'Dirección actualizada'
                });
            }
            else //Si no existe una direccion
            {
                addAddress(
                    user.uid,
                    street,
                    number,
                    numberInt,
                    colony,
                    zipCode,
                    city,
                    state);

                changeStreet('');
                changeNumber('');
                changeNumberInt('');
                changeColony('');
                changeZipCode('');
                changeCity('');
                changeState('');

                changeStateAlert(true);
                changeAlert({
                    type: 'success',
                    message: 'Dirección agregada'
                });
            }
        }
    };

    return (
        <>
        <TitlePage><h1>Perfil de usuario</h1></TitlePage>
        <Container>
        <Container Main>
        <TabsContainer>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Perfil
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Dirección
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    Compras
                </button>
            </div>
            
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2><FaUser/> Datos de usuario</h2>
                    <hr />
                    <Container Profile>
                        <img src={UserIcon} alt={'Usuario'}/>
                        Nombre de usuario: {user.displayName} <br/>
                        Correo electrónico: {user.email}
                    </Container>

                    <h2><FaUserCog/> Editar datos de usuario</h2>
                    <hr />
                    <Container Profile>
                        <form action='' onSubmit={handleSubmitName}>
                        Nuevo nombre de usuario
                        <input
                            type={'text'}
                            name={'name'}
                            id={'editName'}
                            value={name}
                            onChange={handleChange}
                            placeholder='Nuevo nombre de usuario'
                            />
                        <Button Accept Big type='submit' style={{marginBottom: '50px'}}>Cambiar nombre</Button>
                        </form>

                        <form action='' onSubmit={handleSubmitPassword}>
                        Nueva contraseña
                        <input
                            type={'password'}
                            name={'password'}
                            id={'editPassword'}
                            value={password}
                            onChange={handleChange}
                            placeholder='Nueva contraseña'/>
                        Repetir nueva contraseña
                        <input
                            type={'password'}
                            name={'password2'}
                            id={'editPassword2'}
                            value={password2}
                            onChange={handleChange}
                            placeholder='Repetir nueva contraseña'/>
                        <Button Accept Big type='submit'>Cambiar contraseña</Button>
                        </form>
                    </Container>

                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2><FaHouseUser/> Dirección</h2>
                    <hr />
                    <Container Address>
                        {
                        address.length !== 0
                        ?
                        address.map((direccion) => {
                        return(
                        <div key={direccion.id}>
                        <TextAddress>Calle: {direccion.calle}</TextAddress>
                        <TextAddress>Número: {direccion.numero}</TextAddress>
                        <TextAddress>Número interior: {direccion.numeroInt}</TextAddress>
                        <TextAddress>Colonia: {direccion.colonia}</TextAddress>
                        <TextAddress>Código postal: {direccion.codigo}</TextAddress>
                        <TextAddress>Ciudad: {direccion.ciudad}</TextAddress>
                        <TextAddress>Estado: {direccion.estado}</TextAddress>
                        </div>
                        );})
                        :
                        <div><TextAddress>No hay ninguna dirección guardada</TextAddress></div>
                        }
                    </Container>

                    <h2><FaHouseUser/> Cambiar dirección</h2>
                    <hr />
                    <Container Address>
                       <form action='' onSubmit={handleSubmitAddress}>
                        Calle*
                        <input
                            type='text'
                            name='street'
                            id='formStreet'
                            value={street}
                            onChange={handleChange}
                            placeholder='Calle'/>
                        Número exterior*
                        <input
                            type='text'
                            name='number'
                            id='formNumber'
                            value={number}
                            onChange={handleChange}
                            placeholder='Número exterior'/>
                        Número interior
                        <input
                            type='text'
                            name='numberInt'
                            id='formNumberInt'
                            value={numberInt}
                            onChange={handleChange}
                            placeholder='Número interior'/>
                        Colonia*
                        <input
                            type='text'
                            name='colony'
                            id='formColony'
                            value={colony}
                            onChange={handleChange}
                            placeholder='Colonia'/>
                        Código postal*
                        <input
                            type='number'
                            name='zipCode'
                            id='formZipCode'
                            value={zipCode}
                            onChange={handleChange}
                            placeholder='Código Postal'/>
                        Ciudad*
                        <input
                            type='text'
                            name='city'
                            id='formCity'
                            value={city}
                            onChange={handleChange}
                            placeholder='Ciudad'/>
                        Estado*
                        <input
                            type='text'
                            name='state'
                            id='formState'
                            value={state}
                            onChange={handleChange}
                            placeholder='Estado'/>
                        <Button Accept Big type='submit'>Guardar dirección</Button>
                        </form>
                    </Container>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2><FaShoppingBag/> Compras</h2>
                    <hr />
                    {
                    compras.length !== 0
                    ?
                        compras.map((compra) => {
                        return(
                        <>
                            <Container Profile style={{marginTop: '60px'}}>
                                <td>{formatDate(compra.fecha.seconds)}</td>
                                <td>Total: ${compra.total}</td>
                                <hr style={{width: '90%'}}/>
                            </Container>

                            {
                            misProductos.map((miProd) => {
                                return(
                                    miProd.id_compra === compra.id
                                    ?
                                    <Container ProductProfile>
                                    <img src={miProd.imagen} alt=''/>
                                    <p>{miProd.nombre}</p>
                                    <p>Cantidad: {miProd.cantidad}</p>
                                    <p>${(miProd.precio * miProd.cantidad).toFixed(2)}</p>
                                    </Container>
                                    :
                                    <></>
                                )
                            })
                            }
                        </>)
                        })
                    :
                    <Container Profile style={{marginTop: '60px'}}>
                        <p>Compras no realizadas</p>
                    </Container>
                    }
                </div>
            </div>

        <Alert
        type={alert.type}
        message={alert.message}
        stateAlert={stateAlert}
        changeStateAlert={changeStateAlert}/>

        </TabsContainer>
        </Container>
        </Container>
        </>
    );
}

export default Profile;

const TextAddress = styled.p`
    margin-bottom: 5px;
    font-weight: normal;
`;

const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 85%;
    background: white;
    word-break: break-all;
    border: 1px solid rgba(0, 0, 0, 0.274);

    input {
        width: 40%;
        height: 27px;
        font-size: 20px;
        font-family: 'Source Sans Pro', sans-serif;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 15px;    
    }

    .bloc-tabs {
        display: flex;
    }

    .tabs {
        padding: 15px;
        text-align: center;
        font-size: 20px;
        width: 50%;
        background: rgba(128, 128, 128, 0.075);
        cursor: pointer;
        border-bottom: 1px solid rgba(0, 0, 0, 0.274);
        box-sizing: content-box;
        position: relative;
        outline: none;
        color: var(--primary-blue);
    }

    .tabs:not(:last-child){
        border-right: 1px solid rgba(0, 0, 0, 0.274);
    }

    .active-tabs  {
        background: var(--primary-blue);
        border-bottom: 1px solid transparent;
        color: white;
    }

    .active-tabs::before {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 2px);
        height: 5px;
        background: rgb(88, 147, 241);
    }

    button {
        border: none;
        font-family: 'Source Sans Pro', sans-serif;
    }

    .content-tabs {
        flex-grow : 1;
    }

    .content {
        background: var(--primary-blue);
        padding: 20px;
        width: 100%;
        height: 100%;
        display: none;
    }

    .content h2 {
        padding: 0px 0 5px 0px;
    }

    .content hr {
        width: 280px;
        height: 2px;
        background: white;
        margin-bottom: 5px;
    }

    .content p {
        width: 100%;
        height: 100%;
    }

    .active-content {
        display: block;
    }
`;