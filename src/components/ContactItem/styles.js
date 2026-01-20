import styled from 'styled-components';

export const ItemContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
  }
  
  & + & {
    margin-top: 20px;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const ContactName = styled.h3`
  color: #2d3748;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const ContactDetail = styled.div`
  color: #718096;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export const Icon = styled.span`
  font-size: 1.1rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ edit, delete: deleteBtn }) =>
    edit
      ? 'linear-gradient(90deg, #4299e1, #63b3ed)'
      : deleteBtn
      ? 'linear-gradient(90deg, #f56565, #fc8181)'
      : '#e2e8f0'};
  color: white;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const DetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;