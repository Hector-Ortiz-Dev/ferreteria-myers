import React from 'react'
import { useAuth } from './../contexts/AuthContext'
import logo from '../images/logo.png'
import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'
import ButtonCloseSession from './ButtonCloseSession'

import { FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () =>
{
  const {user} = useAuth();
  console.log(user);

  return (
    <>
      <NavContainer Main>
        <NavContainer Section>
          <NavLink to='/'><img src={logo} alt="GpiiToms" height='60px'/></NavLink>
          <Container Search>
            <Input search type={'text'} placeholder={'Buscar un articulo'}></Input>
            <Button search type="submit">
              <NavLink to='/Search'>Buscar</NavLink>
            </Button>
          </Container>
          <div>
            {
              user != null ? 
                <Container Account>
                  <NavLink className={'profile'} to='/Profile'><FaUser/> {user.displayName}</NavLink>
                  <NavLink className={'cart'} to='/Cart'><FaShoppingCart/> Carrito</NavLink>
                  <NavLink className={'noCart'} to='/Cart'>4</NavLink>
                  <ButtonCloseSession/>
                </Container>
              :
                <>
                <Button LogIn><NavLink to='/LogIn'>Ingresar</NavLink></Button>
                <Button SignIn><NavLink to='/SignIn'>Registrar</NavLink></Button>
                </>
            }
          </div>
        </NavContainer>
        <NavContainer Section Bottom>
          <NavLink to='/'>Inicio</NavLink>
          <NavLink to='/Categories'>Categorías</NavLink>
          <NavLink to='/Contact'>Contacto</NavLink>
          <NavLink to='/About'>Acerca de</NavLink>
        </NavContainer>
      </NavContainer>
    </>
  );
}
const Container = styled.div`
  ${props => props.Search && css`
    width: 40%;
    display: flex;
  `}

  ${props => props.Account && css`
        display: flex;
        align-items:center;
        font-size: 20px;

        a{
          color:white;
          text-decoration:none;
          margin-right: .5rem;
          display: flex;
          gap: 5px;
          align-items: center;
        }

        .profile
        {
          border: solid white 2px;
          padding: 5px 10px;
          border-radius: 12px;
        }
      
        .cart
        {
          border: solid white 2px;
          padding: 5px 15px;
          border-radius: 12px 0 0 12px;
          margin: 0;
        }
      
        .noCart
        {
          border: solid white 2px;
          padding: 5px 10px;
          border-radius: 0 12px 12px 0;
        }
    `}
`;

const Input = styled.input`
  ${props => props.search && css`
    width: 100%;
    border: 3px solid var(--primary-orange);
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: var(--primary-blue)
    `}
`
const Button = styled.button`
  a{
    color: white;
    text-decoration: none;
  }

  ${props => props.search && css`
    width: 100px;
    height: 36px;
    border: 3px solid var(--primary-orange);
    background: none;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 18px;
  `}

  ${props => props.LogIn && css`
    width: 100px;
    height: 36px;
    border: 3px solid var(--primary-orange);
    background: none;
    text-align: center;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    font-size: 18px;
  `}
  ${props => props.SignIn && css`
    width: 100px;
    height: 36px;
    border: 1px solid var(--primary-orange);
    background: var(--primary-orange);
    text-align: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 18px;
    
  a{
    color: var(--primary-blue);
    font-weight: bold;
    text-decoration: none;
  }
  `}
`

  const NavContainer = styled.nav`
    ${props => props.Main && css`
      width: 100%;
      padding: 0;
      background-color: var(--primary-blue);
      position: fixed-top;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      top: 0;
      overflow: hidden;
      color: white;
      border-radius: 0 0 80px 80px;
    `};

    ${props => props.Section && css`
      padding: .4rem;
      background-color: var(--primary-blue);
      position: fixed-top;
      display: flex;
      align-items: center;
      justify-content: space-around;
      top: 0;
      overflow: hidden;
      color: white;
    `};

    ${props => props.Bottom && css`
      background-color: var(--primary-orange);
      align-self:center;
      width: 100%;
      margin: 0;
      justify-content: space-evenly;

      a{
        color: var(--primary-blue);
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
      }
    `};
`;

export default Navbar;