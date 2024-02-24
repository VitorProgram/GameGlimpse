import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
    }

    body {
        background: var(--background-color);
    }
`

export default Globals