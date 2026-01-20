import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #4a5568;
  font-weight: 600;
  font-size: 0.95rem;
  
  &:after {
    content: '*';
    color: #e53e3e;
    margin-left: 4px;
  }
`;

export const Input = styled.input`
  padding: 15px;
  border: 2px solid ${({ error }) => (error ? '#e53e3e' : '#e2e8f0')};
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: ${({ error }) => (error ? '#fff5f5' : 'white')};
  
  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? '#e53e3e' : '#667eea')};
    box-shadow: 0 0 0 3px ${({ error }) => (error ? '#fed7d7' : '#c3dafe')};
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`;

export const Button = styled.button`
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ primary }) => 
    primary 
      ? 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' 
      : '#e2e8f0'};
  color: ${({ primary }) => (primary ? 'white' : '#4a5568')};
  flex: 1;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const ErrorMessage = styled.span`
  color: #e53e3e;
  font-size: 0.85rem;
  margin-top: 4px;
`;