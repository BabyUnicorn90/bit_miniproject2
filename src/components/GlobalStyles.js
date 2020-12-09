import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        @import url('../assets');
        box-sizing:border-box;
        font-family: HOONDDUKBOKKI.TTF !important;
    }
    body{
        
        font-size:12rem;
        background-color:#232E22;
        padding: 80px;
    }
`;

export default globalStyles;
