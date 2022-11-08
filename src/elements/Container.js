import styled, {css} from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem 0 2rem 0;
    color: white;

    ${props => props.Main && css`
        width: 80%;
        position: relative;
        z-index: 1;
    `}

    ${props => props.DashBoard && css`
        background-color: var(--glass-blue);
        backdrop-filter: saturate(150%) blur(6px);
        color: #fff;
        padding: 10px 0 20px 10px;
        border-radius: 15px;
        box-shadow: 5px 5px 20px var(--primary-blue);
        margin-bottom: 60px;
    `}

    ${props => props.Card && css`
        width: 19%;
        border-radius: 10px;
        padding: 8px;
        margin: 5px;
        border: 5px solid var(--secondary-orange);
        display: block;
        background-color: var(--primary-blue-t);

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

//min-height: 90vh;