import styled, {css} from 'styled-components'

const FormGlass = styled.form`
    width: 40%;
    padding: 70px 100px 70px 100px;
    border-radius: 30px;
    background-color: var(--primary-blue-t);
    backdrop-filter: saturate(180%) blur(4px);
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 30px;
    box-shadow: 5px 5px 30px var(--primary-blue);

    ${props => props.Registrar && css`
        padding: 40px 100px 40px 100px;
        gap: 2px;
    `};
`;

export default FormGlass;