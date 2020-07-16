import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

  height: 100vh;
  width:100vw;
  display:flex;
  justify-content: space-around;
  align-items:center;
  flex-direction: column;
`;

export const Title = styled.h1`
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    align-items: center;
    margin-top:10px;
`;

export const Button = styled.button`
   margin-left: 700px;
   background: #004E89;
   transition: background 0.2s;

   &:hover {
    background-color: ${shade(0.2, '#004E89')};
   }
`;
