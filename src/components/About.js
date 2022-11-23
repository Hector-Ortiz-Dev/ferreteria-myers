import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import Logo from '../images/logo.png'

const About = () => {
    return (
        <>
            <TitlePage><h1>Acerca de</h1></TitlePage>
            <Container>
                <Container Main>
                    <Container About>
                        <img src={Logo} alt='logo'/>

                        <p>Ferretería Casa Myers cuenta con más de 200 vendedores repartidos en cada una de las quince tiendas que conforman esta red. Dentro de estas tiendas contamos con especialistas en pinturas, herramientas, hidráulica, adhesivos y más.</p>

                        <p>Nos aseguramos de que nuestros vendedores cuenten con un buen entrenamiento tanto de líneas de productos como de ventas y trato respetuoso a los clientes.</p>

                        <p>También contamos con un equipo de ventas  con capacidad de  visitar a nuestros clientes donde ellos lo requieran, a su casa, oficina, taller o planta. Este equipo cuenta con una base de herramientas de demostración de varias marcas, sin embargo, si se requiere  de demostración de algún equipo o línea en especial, se puede realizar esta visita también.</p>

                        <p> Se cuenta con una planta especializada en abastecimiento de equipo para la industria minera con capacidad de visitar a nuestros clientes directamente en sus sitios gracias a una flotilla de vehículos todo terreno. Contamos con experiencia amplia en las necesidades de las minas.</p>

                        <p> Para conveniencia de nuestros clientes, tenemos un teléfono genérico de ventas, el 614-410-15-40, en el que hay personal capacitado disponible de 8:00am a 6:00pm en horario de la ciudad de Chihuahua.</p>
                    </Container>
                </Container>
            </Container>
        </>
    );
}

export default About;