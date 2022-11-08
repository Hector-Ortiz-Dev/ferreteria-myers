import styled from 'styled-components'

const Background = styled.section`
    background-color: var(--light-blue);
    position: relative;
    background-image:
        radial-gradient(
            2000px circle at -20% 50%,
            var(--secondary-blue) 25%,
            var(--light-blue) 65%,
            var(--light-blue) 75%,
            transparent 100%),

        radial-gradient(
            2000px circle at 120% 50%,
            var(--secondary-blue) 25%,
            var(--light-blue) 65%,
            var(--light-blue) 75%,
            transparent 100%);
`;

export default Background;

/*      _       
    .__(.)< (MEOW)       
     \___)  
~~~~~~~~~~~~~~~~~~~~~~~~~~"*/