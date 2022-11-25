import React from 'react'
import TitlePage from '../elements/TitlePage';
import Container from '../elements/Container';
import Tenshi404 from '../images/tenshi404.png';

const Error404 = () => {
    return (
        <>
        <TitlePage><h1>404-Página no encontrada</h1></TitlePage>
            <Container NoPadding>
                    <img src={Tenshi404}/>
            </Container>
        </>
    );
}
 
export default Error404;