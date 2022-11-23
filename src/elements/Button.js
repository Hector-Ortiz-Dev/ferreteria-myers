import styled, {css} from 'styled-components'

const Button = styled.button`

    ${props => props.Agregar && css`
        width: 200px;
        border: 3px solid var(--primary-orange);
        background: var(--light-orange);
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        font-weight: bold;
        margin-left: 30px;
    `};

    ${props => props.Pagar && css`
        margin-top: 10px;
    	width: 100%;
    	height: 40px;
    	border: 3px solid var(--light-orange);
    	background: var(--primary-orange);
    	border-radius: 15px;
    	cursor: pointer;
    	font-size: 20px;
    	font-weight: bold;
        color: white;
    `};

    ${props => props.PlusMinus && css`
        width: 50px;
        height: 35px;
        text-align: center;
        align-items: center;
        justify-content: center;
        background-color: var(--light-orange);
        border: none;
        color: white;
        font-size: 20px;
        display: flex;
        border-radius: 5px;
    	cursor: pointer;
    `};

    ${props => props.Back && css`
        width: 9rem;
        height: 2.5rem;
        border: 2px solid white;
        background: none;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        margin-right: 1.5rem;
    `};

    ${props => props.Accept && css`
        width: 9rem;
        height: 2.5rem;
        border: 3px solid var(--secondary-orange);
        background: #C46820;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        font-weight: bold;
    `};

    ${props => props.CloseSession && css`
        width: 9rem;
        height: 2.5rem;
        border: 3px solid var(--secondary-orange);
        background: #C46820;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        font-weight: bold;
    `};

    ${props => props.VerMas && css`
        width: 9rem;
        height: 2.5rem;
        border: 3px solid var(--light-orange);
        background: var(--primary-orange);
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        font-weight: bold;
        display: block;
        margin: auto;
    `};

    ${props => props.AlCarrito && css`
        width: auto;
        padding: 0 10px;
        height: 60px;
        border: 3px solid var(--light-blue);
        background: var(--primary-blue);
        border-radius: 10px;
        cursor: pointer;
        font-size: 20px;
        color: white;
        font-weight: bold;
        display: block;
        margin: auto;
        margin-top: 5px;
    `};
`;

export default Button;