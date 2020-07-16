import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100vw;
     height: 100vh;
     background: rgba(0, 0, 0, 0.75);

    display:flex;
    justify-content:center;
    align-items: center;
`;

export const Mid = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  overflow: hidden;
  width: 600px;
  height: 300px;
  background: #FFFFFF;
  border-radius: 4px;

  section {
    width: 600px;
    display: flex;
    justify-content:center;
    align-items:center;

    strong{
      color: black;
      font-weight: bold;

      span {
        color: #004E89;
      }
    }
  }

  h2{
    width: 100%;
    justify-content:center;
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 2.76667px;
    flex-direction:column-reverse;
    margin-bottom: 50px;

  & + button{
    margin-left:16px;
    background: #FF6B35;

  }

  &:hover{
    background-color: ${shade(0.5, 'white')};
}
`;
