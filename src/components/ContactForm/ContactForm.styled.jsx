import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items:start;
  width: 300px;
  margin: 0 auto;
`;

export const Label = styled.label`
   font-weight: bold;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff2a00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    box-shadow: 0 0 2px 0 #000;
  }
`;