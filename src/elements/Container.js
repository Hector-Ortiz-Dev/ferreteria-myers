import styled, {css} from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem 0;
    color: white;

    ${props => props.Main && css`
        width: 80%
    `}

    ${props => props.DashBoard && css`
        background-color: var(--liberty);
        color: #fff;
        padding: 10px 0 20px 10px;
        border-radius: 15px;
        flex-wrap: wrap;
    `}

    ${props => props.Card && css`
        width: 19%;
        border-radius: 10px;
        padding: 8px;
        margin: 5px;
        border: 5px solid var(--princeton-orange);
        display: block;
        background-color: var(--blue-pigment);

        img{
            display:block;
            margin: 0 auto 8px;
            object-fit: cover;
        }

        p{
            margin: 7px 0;
            text-align:center;
            font-size: 25px;
        }
    `}
`;

export default Container;