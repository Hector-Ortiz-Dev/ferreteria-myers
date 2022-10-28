import styled, {css} from 'styled-components'

const Button = styled.button`
    ${props => props.Back && css`
        width: 9rem;
        height: 2.5rem;
        border: 2px solid #EE7D26;
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
        border: 3px solid #EE7D26;
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
        border: 3px solid #EE7D26;
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
        border: 3px solid var(--princeton-orange);
        background: var(--alloy-orange);
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