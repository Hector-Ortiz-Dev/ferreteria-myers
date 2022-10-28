import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import useGetProducts from '../hooks/useGetProducts'
import Button from '../elements/Button'

const Home = () =>
{
  const [products] = useGetProducts();
  console.log(products);

  return (
    <>
      <TitlePage><h1>Tienda</h1></TitlePage>
      <Container>
        <Container Main>
          
          <Container DashBoard>

            <TitlePage Dash>Productos para tu jardin</TitlePage>

            <>
            {
              products.map((product) => {
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
    </>
  )
}

export default Home;