import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import Figura from '../elements/Figura'
import imgProd from '../images/images.png'
import styled from 'styled-components'
import Button from '../elements/Button'
import {FaMinus, FaPlus, FaTrashAlt} from 'react-icons/fa'

import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    return (
        <>
        <TitlePage><h1>Carrito de compras</h1></TitlePage>
        <Container>
            <Container Main>
                
            <CartContainer>
                <div className="Cart-Items">
                    <div className="image-box">
                        <img src={imgProd} className='prod-image' alt=''/>
                    </div>
                    <div className="about">
                        <h1 className="title">Apple Juice</h1>
                        <h3 className="subtitle">$20.00</h3>
                    </div>
                    <div className="counter">
                        <Button PlusMinus><FaMinus/></Button>
                        <input min='1' max='100' type='number' defaultValue='1'
                        className="quantity" style={{width: '50px'}} />
                        <Button PlusMinus><FaPlus/></Button>
                    </div>
                    <div className="prices">
                        <div className="amount">$40.00</div>
                        <div className="remove"><u><FaTrashAlt/>Eliminar artículo</u></div>
                    </div>
                </div>

                <hr/> 
                <div className="checkout">
                    <div className="total">
                      <div>
                          <div className="Subtotal">Sub-Total</div>
                          <div className="items">2 artículos</div>
                      </div>
                      <div className="total-amount">$40.00</div>
                    </div>
                    <Button Pagar>Pagar</Button>
                </div>
            </CartContainer>

            </Container>
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
    	padding-top: 5px;
    	font-size: 14px;
    	font-weight: 600;
    	cursor: pointer;
        color: var(--light-orange);
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