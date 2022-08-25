// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store
});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('clicks the button 3 times and checks if it shows the correct amount', () => {
    renderWithRedux(<App />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    userEvent.click(button);
    userEvent.click(button);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('clicks the button 1 time and checks if it shows the correct amount, given the initial state to be 10', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(screen.getByText('11')).toBeInTheDocument();
  });
});

