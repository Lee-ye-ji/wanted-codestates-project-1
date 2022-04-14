import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Spoqa Han Sans Neo';
        margin: 0;
        padding: 0;
    }
    #root{
        position: relative;
    }
    svg, button{
        cursor: pointer;
    }
`;
