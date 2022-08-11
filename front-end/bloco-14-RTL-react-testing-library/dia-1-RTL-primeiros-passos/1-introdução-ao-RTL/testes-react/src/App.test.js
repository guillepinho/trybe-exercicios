import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existe dois botões na tela.', () => {
  render(<App />);
  const inputButtons = screen.getAllByRole('button');
  expect(inputButtons).toHaveLength(2);
  expect(inputButtons[0]).toHaveValue('Enviar');
});

test('Verificando se existe um botão na tela com nome "Enviar".', () => {
  render(<App />);
  const inputButton = screen.getByRole('button', { name: 'Enviar'});
  expect(inputButton).toBeInTheDocument();
  expect(inputButton).toHaveProperty('type', 'button');
});

test('Verificando se existe um botão na tela com nome "Voltar".', () => {
  render(<App />);
  const inputButton = screen.getByRole('button', { name: 'Voltar'});
  expect(inputButton).toBeInTheDocument();
});

test('Verificando se o botão e o campo email estão funcionando.', async () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');

  await userEvent.type(inputEmail, EMAIL_USER);
  const textEmail = screen.getByTestId('id-email-user');
  await userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

test('Verificando se enquanto nada estiver digitado, o componente ValidEmail não aparece.', async () => {
  render(<App />);

  const textEmail = screen.queryByText('Valor:')
  expect(textEmail).not.toBeInTheDocument();
});


// Acessar elementos da tela

// Interagir com os Elementos

// Fazer os testes!