// SignUpFormStyles.js

import styled from 'styled-components';
export  const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Other styles can be added here */
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3498db;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #3498db;
`;
