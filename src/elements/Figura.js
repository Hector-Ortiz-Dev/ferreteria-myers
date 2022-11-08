import styled, {css} from 'styled-components'

const Figura = styled.div`
    ${props => props.Cart && css`
        position: absolute;
        top: -70%;
        left: 34%;
        padding: 90px;
        opacity: 0.8;
        z-index: -1;

        .icono{
            color: orange;
            font-size: 480px;
            transform: rotate(25deg) rotateY(180deg);
        }
    `};

    ${props => props.Tools && css`
        position: absolute;
        top: 15%;
        left: -25%;
        padding: 90px;
        opacity: 0.8;
        z-index: -1;

        .icono{
            color: orange;
            font-size: 700px;
            transform: rotate(20deg) rotateY(180deg);
        }
    `};

    ${props => props.Bag && css`
        position: absolute;
        top: 45%;
        left: 65%;
        padding: 90px;
        opacity: 0.8;
        z-index: -1;

        .icono{
            color: orange;
            font-size: 800px;
            transform: rotate(20deg) rotateY(180deg);
        }
    `};

    ${props => props.Login && css`
        position: absolute;
        top: -20%;
        left: 60%;
        padding: 90px;
        opacity: 0.8;
        z-index: -1;

        .icono{
            color: orange;
            font-size: 500px;
            transform: rotate(20deg) rotateY(180deg);
        }
    `};

    ${props => props.Login && css`
        position: absolute;
        top: -20%;
        left: 60%;
        padding: 90px;
        opacity: 0.8;
        z-index: -1;

        .icono{
            color: orange;
            font-size: 500px;
            transform: rotate(20deg) rotateY(180deg);
        }
    `};

    ${props => props.SignIn && css`
        position: absolute;
        top: -10%;
        left: 55%;
        padding: 90px;
        opacity: 0.8;
        z-index: -1;

        .icono{
            color: orange;
            font-size: 600px;
            transform: rotate(20deg) rotateY(180deg);
        }
    `};
`;

export default Figura;