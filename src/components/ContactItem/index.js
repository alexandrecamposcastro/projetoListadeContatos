import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact, setEditingContact } from '../../redux/actions';
import {
  ItemContainer,
  ContactInfo,
  ContactName,
  ContactDetail,
  Icon,
  Actions,
  ActionButton,
  DetailGroup,
} from './styles';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setEditingContact(contact));
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir este contato?')) {
      dispatch(removeContact(contact.id));
    }
  };

  return (
    <ItemContainer>
      <ContactInfo>
        <ContactName>{contact.name}</ContactName>
        <DetailGroup>
          <ContactDetail>
            <Icon>✉️</Icon>
            {contact.email}
          </ContactDetail>
          <ContactDetail>
            <Icon>📱</Icon>
            {contact.phone}
          </ContactDetail>
        </DetailGroup>
      </ContactInfo>
      <Actions>
        <ActionButton onClick={handleEdit} edit>
          <Icon>✏️</Icon> Editar
        </ActionButton>
        <ActionButton onClick={handleDelete} delete>
          <Icon>🗑️</Icon> Excluir
        </ActionButton>
      </Actions>
    </ItemContainer>
  );
};

export default ContactItem;