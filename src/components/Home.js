import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import {useGetDashGarden, useGetDashPlumbing, useGetDashNews} from '../hooks/useGetProducts'
import Button from '../elements/Button'
import Figura from '../elements/Figura'
import { FaTools, FaShoppingBag } from 'react-icons/fa'

const Home = () =>
{
  const [prodNews] = useGetDashNews();
  const [prodGarden] = useGetDashGarden();
  const [prodPlumbing] = useGetDashPlumbing();

  return (
    <div style={{position:'relative', overflow:'hidden'}}>
      <TitlePage><h1>Tienda</h1></TitlePage>
      <Container>
        <Container Main>
          <Figura Tools><FaTools className='icono'/></Figura>
          <Figura Bag><FaShoppingBag className='icono'/></Figura>
          {/* Dashboard de Nuevos */}
          <Container DashBoard>
            <TitlePage Dash>Nuevos Productos</TitlePage>
            
            <>
            {
              prodNews.map((product) => {
                return(
                <Container Card key={product.id}>
                  <img height='140px' width='200px' src={product.imagen} alt='product'/>
                  <p>{product.nombre}</p>
                  <p>${product.precio}</p>
                  <Button VerMas>Ver mas</Button>
                </Container>
                );
              })
            }
            </>

          </Container>

          {/* Dashboard de Jardin */}
          <Container DashBoard>
            <TitlePage Dash>Productos para tu jardin</TitlePage>
            
            <>
            {
              prodGarden.map((product) => {
                return(
                <Container Card key={product.id}>
                  <img height='140px' width='200px' src={product.imagen} alt='product'/>
                  <p>{product.nombre}</p>
                  <p>${product.precio}</p>
                  <Button VerMas>Ver mas</Button>
                </Container>
                );
              })
            }
            </>

          </Container>
          
          {/* Dashboard de Plomeria */}
          <Container DashBoard>
            <TitlePage Dash>Productos de plomeria</TitlePage>
            
            <>
            {
              prodPlumbing.map((product) => {
                return(
                <Container Card key={product.id}>
                  <img height='140px' width='200px' src={product.imagen} alt='product'/>
                  <p>{product.nombre}</p>
                  <p>${product.precio}</p>
                  <Button VerMas>Ver mas</Button>
                </Container>
                );
              })
            }
            </>

          </Container>

        </Container>
      </Container>
    </div>
  )
}

export default Home;