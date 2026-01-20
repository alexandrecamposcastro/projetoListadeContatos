import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {
  AppContainer,
  MainContent,
  Card,
  Title,
  SectionTitle,
} from './App.styles';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Title>📒 Gerenciador de Contatos</Title>
        <MainContent>
          <Card>
            <SectionTitle>
              {store.getState().contacts.editingContact
                ? '✏️ Editar Contato'
                : '➕ Novo Contato'}
            </SectionTitle>
            <ContactForm />
          </Card>
          
          <Card>
            <SectionTitle>👥 Lista de Contatos</SectionTitle>
            <ContactList />
          </Card>
        </MainContent>
      </AppContainer>
    </Provider>
  );
};

export default App;