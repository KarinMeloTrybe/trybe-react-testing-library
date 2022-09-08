import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import { Pokemon } from '../components';

test('verifica se o card do pokemon é renderizado na page', () => {
  renderWithRouter(<Pokemon
    pokemon={ pokemons[0] }
    isFavorite
  />);
  const captureName = screen.getByTestId('pokemon-name');
  const captureType = screen.getByTestId('pokemon-type');
  const captureWeight = screen.getByTestId('pokemon-weight');
  const captureImage = screen.getByAltText(/sprite/);
  const captureStar = screen.getByAltText(/is marked as favorite/);
  expect(captureName).toHaveTextContent('Pikachu');
  expect(captureType).toHaveTextContent('Electric');
  expect(captureWeight).toHaveTextContent('Average weight: 6.0 kg');
  expect(captureImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(captureStar).toHaveAttribute('src', '/star-icon.svg');
});
test('verifica se o link te redireciona para a page mais detalhes', () => {
  const {
    history,
  } = renderWithRouter(<Pokemon
    pokemon={ pokemons[0] }
    showDetailsLink
  />);
  const captureLink = screen.getByText('More details');
  expect(captureLink).toBeInTheDocument();
  userEvent.click(captureLink);
  expect(history.location.pathname).toBe('/pokemons/25');
});
