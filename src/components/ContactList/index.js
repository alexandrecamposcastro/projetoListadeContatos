import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { ListContainer, Stats } from './styles';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div>
      <Stats>
        <span>Total de contatos: {contacts.length}</span>
        <span>
          {contacts.length === 1 ? '1 contato' : `${contacts.length} contatos`}
        </span>
      </Stats>
      
      <ListContainer>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#718096', padding: '40px' }}>
            Nenhum contato cadastrado. Adicione seu primeiro contato!
          </p>
        )}
      </ListContainer>
    </div>
  );
};

export default ContactList;