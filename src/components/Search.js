import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import styled from 'styled-components'
import imgProd from '../images/images.png'
import Button from '../elements/Button'

const Search = () => {
    return (
        <>
        <TitlePage><h1>Productos</h1></TitlePage>
        
        <Container>
            <Container Main Search>
            <Navigate>
              <div className="sort">
                <label>Categorías: </label>
                <div className="collection-sort">
                  <select>
                    <option value="/">Todas las categorías</option>
                  </select> 
                </div>
              </div>
              <p className='searchText'>Búsqueda no especificada</p>
            </Navigate>

            <Section>
                <div className="product-card">
                  <div className="product-image">
                    <img src={imgProd} alt=''/>
                  </div>
                  <div className="product-info">
                    <p className='name'>Winter Jacket Supreme Marca Premium Color Red</p>
                    <p className='price'>$99.99</p>
                    <Button VerMas>Ver más</Button>
                    <Button AlCarrito>Añadir al carrito</Button>
                  </div>
                </div>
            </Section>
            </Container>
        </Container>
        </>
    );
}
 
export default Search;

const Navigate = styled.nav`
    display: flex;
    width: 100%;
    background-color: var(--secondary-blue);
    height: 60px;
    border: 5px solid var(--primary-blue);
    border-radius: 15px;
    flex-direction: row-reverse;
    padding: 0 30px;
    align-content: center;
    align-items: center;
    justify-content: space-between;

    label{
        font-size: 20px;
        margin-right: 10px;
        align-self: center;
    }

    select{
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 20px;
        border: 3px solid var(--light-blue);
        border-radius: 5px;
        background-color: var(--secondary-blue);
        color: white;
        padding: 4px;
        cursor: pointer;
    }

    option{
        border-radius: 5px;
    }

    .searchText{
      font-size: 20px;
    }

    .sort{
        display: flex;
    }

    .collection-sort {
      display: flex;
      flex-direction: column;
    }
`;

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    background-color: var(--primary-blue-t);
    border: none;
    width:20%;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 15px;
    overflow: hidden;

    .name{
        margin: 18px 0 7px 0;
        font-size: 20px;
        width: 100%;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .price{
        margin: 7px 0 18px 0;
        text-align:center;
        font-size: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
    }

    .product-card {
        padding: 7%;
        flex-grow: 1;
        flex-basis: 16%;
        flex-direction: column;
        display: flex;
    }

    .product-image img {
      max-width: 100%;
      height: 200px;
      border-radius: 15px;
      object-fit: cover;
    }

    .product-info {
      margin-top: auto;
    }
`;