import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        position: relative;
        min-height: 100vh;
        width: 100%;
        overflow: hidden;
    }

    /* section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    } */
`;
