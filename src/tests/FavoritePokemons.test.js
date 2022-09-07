import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('verifica se na page é exibido a mensagem" No favorite pokemon found"', () => {
  renderWithRouter(<FavoritePokemons />);
  const captureMessage = screen
    .getByText(/No favorite pokemon found/i);
  expect(captureMessage).toBeInTheDocument();
});
test('verifica se na page todos os pokemons favoritados são exibidos na tela', () => {
  const {
    history,
  } = renderWithRouter(<App />);
  const captureDetails = screen
    .getByRole('link', { name: /More Details/i });
  expect(captureDetails).toBeInTheDocument();
  userEvent.click(captureDetails);
  const {
    pathname,
  } = history.location;
  expect(pathname).toBe('/pokemons/25');
  const captureFavorited = screen.getByLabelText(/Pokémon favoritado?/i);
  expect(captureFavorited).toBeInTheDocument();
  userEvent.click(captureFavorited);
});
