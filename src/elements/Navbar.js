import React from 'react'
import { useAuth } from './../contexts/AuthContext'
import logo from '../images/logo.png'
import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'
import ButtonCloseSession from './ButtonCloseSession'

const Navbar = () =>
{
  const {user} = useAuth();
  console.log(user);

  return (
    <>
      <NavContainer>
          <NavLink to='/'><img src={logo} alt="GpiiToms" height='60px'/></NavLink>
          <Container Search>
            <Input search type={'text'} placeholder={'Buscar un articulo'}></Input>
            <Button search type="submit">
              Buscar
            </Button>
          </Container>
          <div>
            {
              user != null ? 
              <ButtonCloseSession/> :
              <>
              <Button LogIn><NavLink to='/LogIn'>Ingresar</NavLink></Button>
              <Button SignIn><NavLink to='/SignIn'>Registrar</NavLink></Button>
              </>
            }
          </div>
      </NavContainer>
    </>
  );
}

const Container = styled.div`
  ${props => props.Search && css`
    width: 40%;
    display: flex;
  `}
`;
const Input = styled.input`
  ${props => props.search && css`
    width: 100%;
    border: 3px solid #D87223;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #393993
    `}
`
const Button = styled.button`
  ${props => props.search && css`
    width: 100px;
    height: 36px;
    border: 3px solid #D87223;
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
    border: 3px solid #D87223;
    background: none;
    text-align: center;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    font-size: 18px;
    
  a{
    color: white;
    text-decoration: none;
  }
  `}
  ${props => props.SignIn && css`
    width: 100px;
    height: 36px;
    border: 1px solid #D87223;
    background: #D87223;
    text-align: center;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 18px;
    
  a{
    color: #393993;
    font-weight: bold;
    text-decoration: none;
  }
  `}
`

  const NavContainer = styled.nav`
    padding: .4rem;
    background-color: #393993;
    position: fixed-top;
    display: flex;
    align-items: center;
    justify-content: space-around;
    top: 0;
    overflow: hidden;
    color: white;
    border-radius: 0 0 80px 80px;
`;

export default Navbar;