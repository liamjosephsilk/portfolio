import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    body {
        background: #fff;
        font-family: "Nunito Sans";
        color: #202123;
        width: 100%;
    }
`