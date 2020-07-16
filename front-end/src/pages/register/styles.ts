import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;

    form{
      width:40vw;
      height:72vh;
      margin-top: 50px;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;

      p{
        font-family: Roboto;
        font-style: normal;
        font-size: 24px;
        line-height: 28px;
        width:90%;
        text-align:start;
        }
    }
`;

export const Title = styled.h1`
  font-size: 32px;

`;

export const Input = styled.input`
  padding:14px;
  width:500px;
  margin: 12px 0;
`;

export const Content = styled.section`
  display:flex;
  width:40vw;
   justify-content:space-between;
   flex-direction:column;
   align-items:center;
   margin-top:40px;

`;
export const Button = styled.button`
    transition: background 0.2s;
    width:500px;

    & + button{
    margin-top:16px;
    }

    &:hover{
    background-color: ${shade(0.2, '#004E89')}
    }
`;
