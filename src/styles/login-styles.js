import styled from "styled-components";


export const Div = styled.div`
    width: 450px;
    height: 450px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    border-radius:6px;
    margin-top: 10px;
    background-color:white;
   



`;

export const Input = styled.input`
 font-family:'Courier New', Courier, monospace;
 font-weight:bold;
  width: 90%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }

`;

export const Button = styled.button`
  font-family:'Courier New', Courier, monospace;
  width: ${props => props.width};
  padding: ${props => props.padding};
  margin-top: ${props => props.mt};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 6px;
  border:none;
  font-size:15px;
  font-weight:bold;

  :hover{
      background-color: white;
      color: magenta;

  }

`;