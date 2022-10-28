import styled, {css} from 'styled-components'

const FormGlass = styled.form`
    width: 40%;
    padding: 70px 100px 70px 100px;
    border-radius: 30px;
    background-color: hsla(0, 0%, 100%, 0.1) !important;
    backdrop-filter: saturate(160%) blur(200px);
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 30px;
    box-shadow: 5px 5px 13px #EE7D26;

    ${props => props.Registrar && css`
        padding: 40px 100px 40px 100px;
        gap: 2px;
    `};
`;

export default FormGlass;