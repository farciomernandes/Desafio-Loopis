import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        outline:0;
      }

      a{
        text-decoration:none;
        background:transparent;
        color: inherit;
      }

      button {
        cursor: pointer;
        background: #004E89;
        border-radius: 4px;
        color: #FFFFFF;
        border:none;
        padding: 5px;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 20px;
        width:180px;
        height:50px;
      }

      body {
        background-color: #FFFFFF;
        -webkit-font-smoothing: antialiased;
      }

      body, input, button, h1 {
        font-family: Roboto, serif;
        font-size: 16px;

          h1, h2, h3, h4, h5, h6, strong {
            font-weight: 500;
            color: #004E89;
            font-family: Roboto, serif;
            font-style: normal;
            font-weight: bold;
            line-height: 42px;
            align-items: center;
            margin-top:10px;
          }
      }
`;
