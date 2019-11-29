import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const globalstyles = createGlobalStyle`
${reset};
     a{
         text-decoration:none;
         color:inherit;
     }
     *{
         box-sizing:boerder-box;
     }
     body{
         font-size: 14px;
         overflow : hidden;
         font-family : "notopen_numbers"
     }
     @font-face {
         font-family: "notopen_numbers";
         src: url(${require("../assets/notopen_numbers.ttf")});
     }
`;

export default globalstyles;
