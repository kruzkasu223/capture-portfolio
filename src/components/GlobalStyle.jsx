import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #1b1b1b;
    color: white;
    font-family: 'Inter', sans-serif;
    /* font-family: 'Lobster', cursive; */
}

*::selection{
    color:#1b1b1b;
    background-color: #23d997;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: .75rem 1.5rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #23d997;
    letter-spacing: 2px;
    transition: .3s all ease;

    &:hover,
    &:focus{
        background-color: #23d997;
        color: #1b1b1b;
    }
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

a{
    font-size: 1.1rem;
}

span{
    font-weight: bold;
    color: #23d997;
}

p{
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

`;

export default GlobalStyle;
