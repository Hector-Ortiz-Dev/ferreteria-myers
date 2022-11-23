import React, { useState } from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import UserIcon from '../images/user.png'
import { useAuth } from './../contexts/AuthContext'
import styled from 'styled-components'
import {FaUser, FaUserCog, FaHouseUser, FaShoppingBag} from 'react-icons/fa';
import Button from '../elements/Button'

const Profile = () => {
    const { user } = useAuth();
    console.log(user);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
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
                        Nombre de usuario <input type={'text'}></input>
                        Nueva contraseña <input type={'password'}></input>
                        Confirmar nueva contraseña <input type={'password'}></input>
                        <Button Accept>Guardar datos</Button>
                    </Container>

                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <h2><FaHouseUser/> Dirección</h2>
                    <hr />
                    <Container Address>
                        <TextAddress>Calle: Desierto de Sahara</TextAddress>
                        <TextAddress>Número: 400</TextAddress>
                        <TextAddress>Número interior: ----</TextAddress>
                        <TextAddress>Colonia: Colonial Huinala</TextAddress>
                        <TextAddress>Código postal: 66640</TextAddress>
                        <TextAddress>Ciudad: Apodaca</TextAddress>
                        <TextAddress>Estado: Nuevo León</TextAddress>
                    </Container>

                    <h2><FaHouseUser/> Cambiar dirección</h2>
                    <hr />
                    <Container Address>
                        Calle <input type={'text'} required></input>
                        Número <input type={'text'} required></input>
                        Número interior <input type={'text'}></input>
                        Colonia <input type={'text'} required></input>
                        Código postal <input type={'number'} required></input>
                        Ciudad <input type={'text'} required></input>
                        Estado <input type={'text'} required></input>
                        <Button Accept>Guardar datos</Button>
                    </Container>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <h2><FaShoppingBag/> Compras</h2>
                    <hr />

                    <Container Profile>
                        <td>25 de noviembre del 2022</td>
                        <td>Total: $1240.20</td>
                        <hr style={{width: '90%'}}/>
                    </Container>

                    <Container ProductProfile>
                        <img src={UserIcon}/>
                        <p>Nombre del producto</p>
                        <p>Cantidad: 2</p>
                        <p>$928.19</p>
                    </Container>
                    <Container ProductProfile>
                        <img src={UserIcon}/>
                        <p>Nombre del producto Nombre del producto</p>
                        <p>Cantidad: 2</p>
                        <p>$928.19</p>
                    </Container>
                    <Container ProductProfile>
                        <img src={UserIcon}/>
                        <p>Nombre del producto</p>
                        <p>Cantidad: 2</p>
                        <p>$928.19</p>
                    </Container>

                    <Container Profile>
                        <td>25 de noviembre del 2022</td>
                        <td>Total: $1240.20</td>
                        <hr style={{width: '90%'}}/>
                    </Container>

                    <Container ProductProfile>
                        <img src={UserIcon}/>
                        <p>Nombre del producto</p>
                        <p>Cantidad: 2</p>
                        <p>$928.19</p>
                    </Container>
                    <Container ProductProfile>
                        <img src={UserIcon}/>
                        <p>Nombre del producto Nombre del producto</p>
                        <p>Cantidad: 2</p>
                        <p>$928.19</p>
                    </Container>
                    <Container ProductProfile>
                        <img src={UserIcon}/>
                        <p>Nombre del producto</p>
                        <p>Cantidad: 2</p>
                        <p>$928.19</p>
                    </Container>

                </div>
            </div>
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