import styled, {css} from 'styled-components'

const TitlePage = styled.div`
 padding: 10px 0 0 190px;
 font-size: 40px;
 color: white;
 text-shadow: 5px 5px #393993;

 ${props => props.Dash && css`
    width: 100%;
    margin: 0;
    display: block;
    padding: 0 0 15px;
 `};
`;

export default TitlePage;