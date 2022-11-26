import React, { useState } from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import Button from '../elements/Button'
import { useGetAllProducts } from '../hooks/useGetProducts'
import { Link } from 'react-router-dom'

const Search = () => {
  const [categorias, changeCategorias] = useState('/');
  const [products] = useGetAllProducts();
  const {search} = useParams();

  console.log(categorias);

  const handleChange = async (e) => {
    switch(e.target.name){
      case 'categorias':
        changeCategorias(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
      <>
      <TitlePage><h1>Productos</h1></TitlePage>
      
      <Container>
          <Container Main Search>
          <Navigate>
            <div className="sort">
              <label>Categorías: </label>
              <div className="collection-sort">
                <select
                  name='categorias'
                  onChange={handleChange}
                >
                  <option value="/">Todas las categorías</option>
                  <option value="Jardin">Jardín</option>
                  <option value="Plomeria">Plomería</option>
                  <option value="Seguridad">Seguridad</option>
                  <option value="Iluminacion">Iluminación</option>
                  <option value="Limpieza">Limpieza</option>
                  <option value="Electricidad">Electricidad</option>
                  <option value="Hogar">Hogar</option>
                  <option value="Aceites">Aceites</option>
                  <option value="Carga">Carga</option>
                  <option value="Hidraulico">Hidráulico</option>
                  <option value="Soldadura">Soldadura</option>
                </select> 
              </div>
            </div>
            <p className='searchText'>Búsqueda: {search}</p>
          </Navigate>

          {
          products.map((product) => (
            (((product.nombre.includes(search) || search ===' ')) &&
              (product.categoria === categorias || categorias === '/')) &&

              <Section key={product.id}>
                  <div className="product-card">
                    <div className="product-image">
                      <img src={product.imagen} alt=''/>
                    </div>
                    <div className="product-info">
                      <p className='name'>{product.nombre}</p>
                      <p className='price'>${(product.precio).toFixed(2)}</p>
                      <Button VerMas><Link to={'/Product/' + product.id}>Ver más</Link></Button>
                    </div>
                  </div>
              </Section>
            ))
          }
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
    border: 6px solid var(--light-blue);
    width:20%;
    justify-content: center;
    align-content: center;
    text-align: center;
    border-radius: 15px;
    overflow: hidden;
    margin: 4px;

    a{
      text-decoration:none;
      color:white;
    }

    img{
      width: 90%;
      object-fit: cover;
    }

    .name{
        margin: 18px 0 7px 0;
        font-size: 20px;
        width: 100%;
        overflow:hidden;
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
        width: 100%;
    }

    .product-image img {
      max-width: 100%;
      height: 200px;
      border-radius: 15px;
      object-fit: cover;
    }

    .product-info {
      margin-top: auto;
      width:100%;
    }
`;