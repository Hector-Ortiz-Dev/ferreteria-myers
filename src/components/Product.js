import React, { useState } from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import imgProd from '../images/images.png'
import styled from 'styled-components'
import {FaMinus, FaPlus} from 'react-icons/fa'
import Button from '../elements/Button'
import {useParams} from 'react-router-dom'
import { useGetSingleProduct } from '../hooks/useGetProducts'
import Alert from './../elements/Alert'

import { async } from '@firebase/util'
import addMisProductos from '../hooks/addMisProductos'
import { useAuth } from '../contexts/AuthContext'

const Product = () => {
    const {id} = useParams();
    const [product] = useGetSingleProduct(id);
    const {user} = useAuth();
    //console.log(product[0]);

    //console.log(product);
    const [amount, changeAmount] = useState(1);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const [alert, changeAlert] = useState('');
    const [stateAlert, changeStateAlert] = useState(false);

    const handleChange = async (e) => {
        switch(e.target.name){
            case 'quantity':
                if(e.target.value <= 0)
                    changeAmount(1);
                else if(e.target.value >= 100)
                    changeAmount(100);
                else
                    changeAmount(e.target.value);
                break;
            default:
              break;
        }
      };

    const plusAmount = () => {
        changeAmount(amount + 1);
    };

    const minusAmount = () => {
        if(amount === 1)
            return;
        changeAmount(amount - 1);
    };

    const addToCart = (e) => {
        console.log('Deploy addToCart');
        e.preventDefault();

        changeStateAlert(false);
        changeAlert({});

        addMisProductos(user.uid, product[0], amount);

        changeStateAlert(true);
            changeAlert({
                type: 'success',
                message: 'Producto agregado al carrito'
            });
    };

    return (
        <>
        <TitlePage><h1>Producto</h1></TitlePage>
        <Container>
            
        <ProductContainer>
        {
        product.map((producto) => {
        return(
        <form className="single-product" key={producto.id}
            action='' onSubmit={addToCart}>
            <div className="row">
                <div className="col-6">
                    <div className="product-image">
                        <div className="product-image-main">
                            <img src={producto.imagen} alt="" id="product-main-image"/>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="product">
                        <div className="product-title">
                            <h2>{producto.nombre}</h2>
                        </div>
                        <div className="product-price">
                            <span className="offer-price">${producto.precio.toFixed(2)}</span>
                        </div>

                        <div className="product-details">
                            <h3>Descripción</h3>
                            <p>{producto.descripcion}</p>
                        </div>
                        <span className="divider"></span>

                        <div className="product-btn-group">
                            
                            <Button PlusMinus type='button' onClick={()=>minusAmount()}>
                              <FaMinus/>
                            </Button>

                            <input type='number' name='quantity' value={amount}
                              className="quantity" onChange={handleChange} style={{width: '50px'}} />

                            <Button PlusMinus type='button' onClick={()=>plusAmount()}>
                              <FaPlus/>
                            </Button>

                            <Button Agregar type='submit'>Añadir al carrito</Button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </form>
        );})
        }
        </ProductContainer>

        <Alert
        type={alert.type}
        message={alert.message}
        stateAlert={stateAlert}
        changeStateAlert={changeStateAlert}/>

        </Container>
        </>
    );
}
 
export default Product;

const ProductContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-blue-t);
    backdrop-filter: saturate(100%) blur(4px);
    border-radius: 15px;

    .row{
        display: flex;
        gap: 0px;
    }

    .col-6{
        width: 50%;
    }

    .single-product{
        width: 1080px;
        position: relative;
    }

    .single-product .product-image{
        width: 100%;
    }

    .product-image .product-image-main{
        position: relative;
        display: block;
        height: 480px;
        padding: 30px;
    }

    .product-image-main img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }

    .product-title{
        margin-top: 20px;
    }
    
    .product-title h2{
        font-size: 32px;
        line-height: 2.4rem;
        font-weight: 700;
        letter-spacing: -0.02rem;
    }

    .product-price{
        display: flex;
        position: relative;
        margin: 10px 0;
        align-items: center;
    }

    .product-price .offer-price{
        font-size: 48px;
        font-weight: 700;
    }

    .product-details{
        margin: 10px 0;
    }

    .product-details h3{
        font-size: 18px;
        font-weight: 500;
    }

    .product-details p{
        margin: 5px 0;
        font-size: 14px;
        line-height: 1.2rem;
    }

    .divider{
        display: block;
        height: 2px;
        width: 98%;
        background: white;
        margin: 20px 0;
    }

    .product-btn-group{
        display: flex;
        height: 35px;
    }

    .product-btn-group .button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 10px 24px;
        font-size: 16px;
        font-weight: 500;
    }

    .quantity{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 20px;
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

    input[type=number] {
        -moz-appearance:textfield;
    }

    .product-btn-group .add-cart{
        background-color: var(--bg-grey);
        color: var(--grey);
        border-radius: 4px;
        cursor: pointer;
    }

    .product-btn-group .add-cart i{
        font-size: 20px;
    }

    .product-btn-group .add-cart:hover{
        box-shadow: 0 3px 6px var(--shadow);
        background: var(--grey);
        color: #fff;
    }
`;