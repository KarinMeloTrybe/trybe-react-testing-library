import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('verifica se o topo desta aplicação possui um link home', () => {
  const {
    history,
  } = renderWithRouter(<App />);
  const captureLink = screen.getByRole('link', { name: /home/i });
  expect(captureLink).toBeInTheDocument();
  userEvent.click(captureLink);
  const {
    pathname,
  } = history.location;
  expect(pathname).toBe('/');
});
test('verifica se o topo desta aplicação possui um link About', () => {
  const {
    history,
  } = renderWithRouter(<App />);
  const captureLink = screen.getByRole('link', { name: /about/i });
  expect(captureLink).toBeInTheDocument();
  userEvent.click(captureLink);
  const {
    pathname,
  } = history.location;
  expect(pathname).toBe('/about');
});
test(
  'verifica se o topo desta aplicação possui link com o texto Favorite Pokémons', () => {
    const {
      history,
    } = renderWithRouter(<App />);
    const captureLink = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(captureLink).toBeInTheDocument();
    userEvent.click(captureLink);
    const {
      pathname,
    } = history.location;
    expect(pathname).toBe('/favorites');
  },
);
test('verifica se ao entrar em URL desconhecida redireciona para Not found', () => {
  const {
    history,
  } = renderWithRouter(<App />);
  history.push('/*');
});
