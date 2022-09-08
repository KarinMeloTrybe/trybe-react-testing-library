import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import pokemons from '../data';
import PokemonDetails from '../pages/PokemonDetails';

test('verifica se os detalhes do pokemon são renderizados na page', () => {
  render(
    <MemoryRouter initialEntries={ ['/pokemons/25'] }>
      <PokemonDetails
        match={ {
          params: {
            id: '25',
          },
        } }
        pokemons={ pokemons }
        isPokemonFavoriteById={ {
          25: true,
        } }
        onUpdateFavoritePokemons={ () => {} }
      />

    </MemoryRouter>,
  );
  const captureName = screen.getByTestId('pokemon-name');
  const captureType = screen.getByTestId('pokemon-type');
  const captureWeight = screen.getByTestId('pokemon-weight');
  const captureImage = screen.getByAltText(/sprite/);
  const captureTitle = screen.getByText('Summary');
  const favoritePokemon = screen.getByText('Pokémon favoritado?');
  const captureStar = screen.getByAltText(/is marked as favorite/);
  const captureSummary = screen.getByText(/with electricity/);
  const captureTitle2 = screen.getByText('Game Locations of Pikachu');
  const captureTitle3 = screen.getByText('Pikachu Details');
  const captureImg = screen.getAllByAltText(/location/);
  expect(captureName).toHaveTextContent('Pikachu');
  expect(captureType).toHaveTextContent('Electric');
  expect(captureWeight).toHaveTextContent('Average weight: 6.0 kg');
  expect(captureImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(captureStar).toHaveAttribute('src', '/star-icon.svg');
  expect(captureTitle).toBeInTheDocument();
  expect(favoritePokemon).toBeInTheDocument();
  expect(captureImg[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(captureImg[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  expect(captureSummary).toBeInTheDocument();
  expect(captureTitle2).toBeInTheDocument();
  expect(captureTitle3).toBeInTheDocument();
});
