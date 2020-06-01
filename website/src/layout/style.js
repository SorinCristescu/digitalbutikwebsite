import styled from 'styled-components'

export const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    main {
        width: 100%;
        height: auto;
        position: absolute;
        top: 80px;
        display: block;
        max-width: 960px;
   
    }
`;

// export const SplashLogo = styled.div`
//     width: 300px;
//     height: auto;
//     position: absolute;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     // top: 45%;
//     // opacity: 1;
//     // left: 45%;
// `;