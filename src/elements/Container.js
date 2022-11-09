import styled, {css} from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 1rem 0 2rem 0;
    color: white;
    justify-content: center;

    ${props => props.Main && css`
        width: 80%;
        position: relative;
        z-index: 1;
        flex-wrap: wrap;
    `}

    ${props => props.DashBoard && css`
        background-color: var(--glass-blue);
        backdrop-filter: saturate(150%) blur(6px);
        color: #fff;
        padding: 10px 0 20px 10px;
        border-radius: 15px;
        box-shadow: 5px 5px 20px var(--primary-blue);
        margin-bottom: 60px;
        flex-wrap: wrap;
    `}

    ${props => props.Card && css`
        width: 100%;
        max-width: 270px;
        border-radius: 10px;
        padding: 8px;
        margin: 5px;
        border: 5px solid var(--secondary-orange);
        display: block;
        background-color: var(--primary-blue-t);
        justify-content: unset;

        img{
            display:block;
            margin: 0 auto 8px;
            width: 100%;
            object-fit: cover;
        }

        p{
            margin: 7px 0;
            text-align:center;
            font-size: 16px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
        }
    `}
`;

export default Container;

//min-height: 90vh;