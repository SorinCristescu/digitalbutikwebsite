import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    max-width: 960px;
    z-index: 1;
    background-color: #F1EDFF;

    .nav-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        a {
            text-decoration: none;
            color: black;
            margin-left: 20px;
        }
    }

`;



export const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    margin: 10px;
    opacity: 1;
`;