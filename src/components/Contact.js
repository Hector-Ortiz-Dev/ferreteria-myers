import React from 'react'
import Container from '../elements/Container'
import TitlePage from '../elements/TitlePage'
import Logo from '../images/logo.png'

const Contact = () => {
    return (
        <>
            <TitlePage><h1>Contacto</h1></TitlePage>
            <Container>
                <Container Main>
                    <Container Contact>
                        <img src={Logo} alt='logo'/>

                        <p className='text'>Te atendemos con gusto en las siguientes areas:</p>

                        <p className='title'>Departamento de Contabilidad</p>
                        <p className='tel'>Teléfono: 614-410-15-56</p>

                        <p className='title'>Departamento de Crédito</p>
                        <p className='tel'>Teléfono: 614-410-48-76</p>

                        <p className='title'>Departamento de Recursos Humanos</p>
                        <p className='tel'>Teléfono: 614-410-48-76</p>

                        <p className='title'>Departamento de Publicidad</p>
                        <p className='email'>publicidad@casamyers.com.mx</p>
                        <p className='tel'>Teléfono: 614-410-48-76</p>

                        <p className='title'>Atención Web</p>
                        <p className='email'>atencionweb@casamyers.com.mx</p>
                        <p className='tel'>Teléfono: 614-410-15-40</p>
                    </Container>
                </Container>
            </Container>
        </>
    );
}
 
export default Contact;