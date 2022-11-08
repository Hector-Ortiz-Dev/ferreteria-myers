import styled, {css} from 'styled-components'

const Button = styled.button`
    ${props => props.Back && css`
        width: 9rem;
        height: 2.5rem;
        border: 2px solid var(--secondary-orange);
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
`;

export default Button;