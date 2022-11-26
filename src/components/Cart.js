import React, {useState} from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import Figura from '../elements/Figura'
import { FaShoppingCart } from 'react-icons/fa';
import styled, {css} from 'styled-components'
import Button from '../elements/Button'
import {FaMinus, FaPlus, FaTrashAlt} from 'react-icons/fa'
import { useAuth } from './../contexts/AuthContext'
import {useNavigate} from 'react-router-dom'
import Alert from './../elements/Alert'
import CartEmpty from './../images/cart-empty.png'
import Truck from './../images/truck.png'

import useGetAddress from '../hooks/useGetAddress'
import { useGetMisProductos } from '../hooks/useGetMisProducts'
import { buyMisProductos, deleteMiProducto, updateAmount } from '../hooks/updateMisProducts';
import addCompra from '../hooks/addCompra';

const Cart = () => {
    const {user} = useAuth();
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const navigate = useNavigate();
    const [alert, changeAlert] = useState('');
    const [stateAlert, changeStateAlert] = useState(false);
    const [address] = useGetAddress(user.uid);

    const [misProductos] = useGetMisProductos(user);
    const [cartPay, changeCartPay] = useState(false);

    let total = 0;
    let cantidadProd = 0;

    const handleAmountChange = (e) => {
        console.log(e.target.value);
    }

    const plusAmount = async(producto) => {
        //console.log('+ Deploy plusAmount' + producto.id);
        //console.log('Cantidad: ' + producto.cantidad);

        producto.cantidad += 1;
        
        await updateAmount(producto.id, producto.cantidad);
    };

    const minusAmount = async(producto) => {
        //console.log('- Deploy minusAmount' + producto.id);
        //console.log('Cantidad: ' + producto.cantidad);

        if(producto.cantidad === 1)
            return;

        producto.cantidad -= 1;

        await updateAmount(producto.id, producto.cantidad);
    };

    const deleteProduct = (id_MiProducto)=> {
        deleteMiProducto(id_MiProducto);
    };

    const Pay = async() => {
        //console.log('Deploy Pay');
        changeStateAlert(false);
        changeAlert({});

        if(address.length !== 0 ){
            //console.log('Tiene una direccion');
            changeCartPay(true);

            //Compra creada y id obtenido
            const id_compra = await addCompra(total, user.uid);
            
            misProductos.map((producto) => {
            //console.log(producto.nombre);

            //Carrito -> Compra
            buyMisProductos(producto.id, id_compra);
            });
        }
        else{
            console.log('No hay direccion');
            changeStateAlert(true);
            changeAlert({
                type: 'error',
                message: 'Ingresa una dirección en tu perfil para realizar la compra.'
            })
            await delay(3000);
            navigate('/Profile');
        }
    };
    
    return (
        <>
        <TitlePage><h1>Carrito de compras</h1></TitlePage>
        <Container>
            <Container Main>
            {
            cartPay === false
            ?
                misProductos.length !== 0
                ?
                <CartContainer>
                    {
                    misProductos.map((producto) => {
                        total += producto.precio * producto.cantidad;
                        cantidadProd = producto.cantidad + cantidadProd;

                        return(
                        <div className="Cart-Items" key={producto.id}>
                            <div className="image-box">
                                <img src={producto.imagen} className='prod-image' alt=''/>
                            </div>

                            <div className="about">
                                <h1 className="title">{producto.nombre}</h1>
                                <h3 className="subtitle">Precio: $ {producto.precio}</h3>
                            </div>

                            <div className="counter">
                                <Button PlusMinus onClick={()=>minusAmount(producto)}><FaMinus/></Button>
                                <input min='1' max='100' type='number' value={producto.cantidad}
                                className="quantity" name='quantity' onChange={handleAmountChange} style={{width: '50px'}} />
                                <Button PlusMinus onClick={()=>plusAmount(producto)}><FaPlus/></Button>
                            </div>

                            <div className="prices">
                                <div className="amount">${(producto.precio*producto.cantidad).toFixed(2)}</div>
                                <button className="remove" onClick={()=>deleteProduct(producto.id)}><u><FaTrashAlt/>Eliminar artículo</u></button>
                            </div>
                        </div>
                        )
                    })
                    }
                    <hr/> 
                    <div className="checkout">
                        <div className="total">
                          <div>
                              <div className="Subtotal">Sub-Total</div>
                              <div className="items">{cantidadProd} productos</div>
                          </div>

                          <div className="total-amount">${total = total.toFixed(2)}</div>
                        </div>
                        <Button Pagar type='button' onClick={()=>Pay()}>Pagar</Button>
                    </div>
                </CartContainer>
                :
                <CartContainer>
                    <p>El carrito de compras está vacío</p>
                    <p><img src={CartEmpty} alt='' style={{width: '50%'}}/></p>
                </CartContainer>
            :
            <CartContainer Pay>
                <p className='payed'>Productos comprados</p>
                <p><img src={Truck} alt='' style={{width: '50%'}}/></p>
                <br/>
                <p className='payed'>Compra en camino a</p>
                <p>{address[0].calle} {address[0].numero}, {address[0].numeroInt}</p>
                <p>{address[0].colonia}, {address[0].codigo},</p>
                <p>{address[0].ciudad}, {address[0].estado}</p>
            </CartContainer>
            }
            </Container>
            <Alert
            type={alert.type}
            message={alert.message}
            stateAlert={stateAlert}
            changeStateAlert={changeStateAlert}/>
        </Container>
        </>
    );
}

export default Cart;

const CartContainer = styled.div`
    width: 70%;
    background-color: var(--primary-blue-t);
    box-shadow: 2px 2px 20px var(--primary-blue-t);
    color: white;
    border-radius: 20px;
    margin: 0;
    padding: 30px 0;
    justify-content: center;
    align-items: center;
    min-height: 277px;

    ${props => props.Pay && css`
        background-color: #00AD6E;
    `}

    p{
        font-size: 30px;
        text-align: center;
    }
    .payed{
        font-size: 50px;
    }

    .Action{
    	font-size: 14px;
    	font-weight: 600;
    	cursor: pointer;
    	border-bottom: 1px solid #E44C4C;
    }

    .Cart-Items{
    	margin: auto;
    	width: 90%;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    }

    .image-box{
    	width: 15%;
    	text-align: center;
    }

    .prod-image{
        width: 110px;
        height: 120px;
        border-radius: 15px;
        object-fit: cover;
    }

    .about{
    	height: 100%;
    	width: 24%;
    }

    .title{
    	padding-top: 10px;
    	font-size: 32px;
    	font-weight: 800;
    }

    .subtitle{
    	font-size: 20px;
    	font-weight: 600;
    	color: var(--light-blue);
    }

    .quantity{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 26px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
        margin: 0;
    }

    .counter{
    	width: 15%;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    }

    .btn{
    	width: 40px;
    	height: 40px;
    	border-radius: 50%;
    	background-color: #d9d9d9;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	font-size: 20px;
    	font-weight: 900;
    	color: #202020;
    	cursor: pointer;
    }

    .prices{
    	height: 100%;
    	text-align: right;
    }

    .amount{
    	padding-top: 20px;
    	font-size: 26px;
    	font-weight: 800;
    }

    .remove{
    	padding: 5px;
    	font-size: 14px;
    	font-weight: 600;
    	cursor: pointer;
        color: var(--light-orange);
        background-color: var(--primary-blue);
        border-radius: 12px;
        border: none;
    }

    .pad{
    	margin-top: 5px;
    }

    hr{
    	width: 66%;
    	float: right;
    	margin-right: 5%;
    }

    .checkout{
    	float: right;
    	margin-right: 5%;
    	width: 28%;
    }

    .total{
    	width: 100%;
    	display: flex;
    	justify-content: space-between;
    }

    .Subtotal{
    	font-size: 22px;
    	font-weight: 700;
    }

    .items{
    	font-size: 16px;
    	font-weight: 500;
    	color: var(--light-blue);
    	line-height: 10px;
    }

    .total-amount{
    	font-size: 36px;
    	font-weight: 900;
    }
`;