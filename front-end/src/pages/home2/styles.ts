import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width:100vw;
  display:flex;
  justify-content: space-around;
  align-items:center;
  flex-direction: column;

  >p {
    margin-bottom:18px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color:#FF6B35;
    width:99vw;
  }
  `;

export const Title = styled.h1`
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 42px;
    align-items: center;
    margin-bottom:20px;
    `;

export const Content = styled.section`

`;

export const Lista = styled.div`
  position:absolute;
  top:50%;
  bottom:50%;
  left:2%;
  min-width:70%;
  display:flex;
`;

export const Card = styled.div`
  background-color: #F5F5F5;
  border-radius: 4px;
  width:350px;
  height:150px;
  display:flex;
  flex-direction:column;

  margin:0 40px;

  section{
    display:flex;
    width:100%;
    justify-content:space-between;

    section{
      width:100px;
      margin-top:6px;

      a  + a {
        color: #FF6B35;
      }
    }
  }
`;

export const Buttons = styled.section`
  width:100vw;
  display: flex;
  align-items:end;
  justify-content: flex-end;
  margin-right:200px;
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;

  & + button{
    margin-left:16px;
  }

  &:hover{
    background-color: ${shade(0.2, '#004E89')}
  }
`;
