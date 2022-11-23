import styled, {css} from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    padding: 1rem 0 2rem 0;
    color: white;
    justify-content: center;

    ${props => props.Search && css`
        background-color: var(--secondary-blue-t);
        border-radius: 15px;
        padding: 0;
        box-shadow: 5px 5px 10px var(--primary-blue);
    `};

    ${props => props.ProductPage && css`
        background-color: var(--light-blue-t);
        backdrop-filter: saturate(100%) blur(4px);
        box-shadow: 5px 5px 10px var(--primary-blue);
        flex-direction: row;
        border-radius: 15px;
        padding: 40px 80px 40px 80px;
        width: 100%;
        max-width: 1800px;
        align-items: center;
    `}

    ${props => props.Address && css`
        border-radius: 15px;
        padding: 10px 80px 10px 80px;
        //box-shadow: 5px 5px 10px black;
        flex-direction: column;
        width: 80%;
        font-size: 25px;
        translate: 10%;
    `};

    ${props => props.Profile && css`
        border-radius: 15px;
        padding: 0px 80px 20px 80px;
        border: 4px solid var(--primary-blue);
        box-shadow: 5px 5px 10px var(--primary-blue);
        align-items: center;
        flex-direction: column;
        width: 100%;
        font-size: 25px;
        font-weight: bold;

        img{
            width: 25%;
            margin: 0 0 25px 0;
        }
    }
    `}

    ${props => props.ProductProfile && css`
        border-radius: 15px;
        padding: 0;
        border: 4px solid var(--primary-blue);
        align-items: center;
        flex-direction: row;
        width: 100%;
        font-size: 25px;
        font-weight: normal;
        justify-content: space-around;
        background-color: var(--secondary-blue);

        p{
            flex-grow:0;
            flex-shrink:1;
            width: fit-content !important;
        }

        img{
            width: 5%;
            object-fit: cover;
        }
    }
    `}

    ${props => props.Contact && css`
        background-color: var(--light-blue);
        border-radius: 15px;
        padding: 40px 80px 40px 80px;
        border: 16px solid var(--primary-blue);
        box-shadow: 5px 5px 10px var(--primary-blue);
        align-items: center;
        flex-direction: column;
        width: 55%;
        max-width: 1200px;

        img{
            width: 50%;
            margin-bottom: 50px;
            border-radius: 15px;
            border: 26px solid var(--primary-blue);
        }

        p{
            color: var(--primary-blue);
            font-size: 23px;
        }

        .text{
            margin-bottom: 30px;
        }

        .title{
            font-weight: bold;
        }

        .email{
            font-style: italic;
        }

        .tel{
            margin-bottom: 50px;

        }
    `}

    ${props => props.About && css`
        background-color: var(--light-blue);
        border-radius: 15px;
        flex-direction: column;
        padding: 40px 80px 40px 80px;
        width: 70%;
        max-width: 1200px;
        align-items: center;
        border: 16px solid var(--primary-blue);
        box-shadow: 5px 5px 10px var(--primary-blue);

        img{
            width: 50%;
            margin-bottom: 50px;
            border-radius: 15px;
            border: 26px solid var(--primary-blue);
        }

        p{
            color: var(--primary-blue);
            font-size: 23px;
            margin-bottom: 30px;
            text-align: justify;
        }
    `}

    ${props => props.Main && css`
        width: 80%;
        position: relative;
        z-index: 1;
        flex-wrap: wrap;
    `}

    ${props => props.DashBoard && css`
        background-color: var(--glass-blue);
        backdrop-filter: saturate(180%) blur(6px);
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