import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  UPDATE_CONTACT,
  SET_EDITING_CONTACT,
} from './actions';

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@email.com',
      phone: '(11) 99999-9999',
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      phone: '(21) 98888-8888',
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      email: 'carlos.oliveira@email.com',
      phone: '(31) 97777-7777',
    },
  ],
  editingContact: null,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, { ...action.payload, id: Date.now() }],
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        editingContact: null,
      };

    case SET_EDITING_CONTACT:
      return {
        ...state,
        editingContact: action.payload,
      };

    default:
      return state;
  }
};

export default contactsReducer;