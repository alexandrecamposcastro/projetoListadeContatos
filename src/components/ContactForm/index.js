import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact, setEditingContact } from '../../redux/actions';
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonGroup,
  ErrorMessage,
} from './styles';

const ContactForm = () => {
  const dispatch = useDispatch();
  const editingContact = useSelector((state) => state.contacts.editingContact);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingContact) {
      setFormData(editingContact);
    }
  }, [editingContact]);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Formato: (99) 99999-9999';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const phone = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
      
      setFormData({ ...formData, [name]: phone });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      if (editingContact) {
        dispatch(updateContact(formData));
      } else {
        dispatch(addContact(formData));
      }
      
      setFormData({ name: '', email: '', phone: '' });
    }
  };

  const handleCancel = () => {
    dispatch(setEditingContact(null));
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Nome Completo *</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite o nome completo"
          error={errors.name}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">E-mail *</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemplo@email.com"
          error={errors.email}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">Telefone *</Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(99) 99999-9999"
          maxLength="15"
          error={errors.phone}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
      </FormGroup>

      <ButtonGroup>
        <Button type="submit" primary>
          {editingContact ? 'Atualizar Contato' : 'Adicionar Contato'}
        </Button>
        {editingContact && (
          <Button type="button" onClick={handleCancel}>
            Cancelar Edição
          </Button>
        )}
      </ButtonGroup>
    </FormContainer>
  );
};

export default ContactForm;