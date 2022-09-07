import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokedex from '../pages/Pokedex';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

const isPokemonFavoriteById = {
  25: false,
  4: false,
  10: false,
  23: false,
  65: false,
  151: false,
  78: false,
  143: false,
  148: false,
};
test('verifica se a page possui uma heading "Encountered pokémons"', () => {
  renderWithRouter(<Pokedex
    pokemons={ pokemons }
    isPokemonFavoriteById={ isPokemonFavoriteById }
  />);
  const captureHeading = screen
    .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
  expect(captureHeading).toBeInTheDocument();
});
test('verifica se ao clicar no botão o próximo pokémon é exibido', () => {
  renderWithRouter(<App />);
  const nextPokemon = screen.getByRole('button', { name: /Próximo Pokémon/i });
  const firstPokemon = screen.getByAltText(/Pikachu sprite/i);
  expect(nextPokemon).toBeInTheDocument();
  expect(firstPokemon).toBeInTheDocument();
  userEvent.click(nextPokemon);
  const secondPokemon = screen.getByAltText(/Charmander sprite/i);
  expect(secondPokemon).toBeInTheDocument();
});
test('verifica se a page possui os botões de filtro', () => {
  renderWithRouter(<App />);
  const existFilter1 = screen.getByRole('button', { name: /Electric/i });
  const existFilter2 = screen.getByRole('button', { name: /Fire/i });
  const existFilter3 = screen.getByRole('button', { name: /Bug/i });
  expect(existFilter1).toBeInTheDocument();
  expect(existFilter1).toHaveTextContent(/Electric/i);
  expect(existFilter2).toBeInTheDocument();
  expect(existFilter2).toHaveTextContent(/Fire/i);
  expect(existFilter3).toBeInTheDocument();
  expect(existFilter3).toHaveTextContent(/Bug/i);
});
test('verifica se o data-testid esperado captura os botões de filtro', () => {
  renderWithRouter(<App />);
  const buttons = screen.getAllByTestId('pokemon-type-button');
  const typeList = [
    'Electric',
    'Fire',
    'Bug',
    'Poison',
    'Psychic',
    'Normal',
    'Dragon',
  ];
  typeList.forEach((text, index) => {
    expect(buttons[index]).toHaveTextContent(text);
  });
});
test('verifica se é possível clicar no botão All', () => {
  renderWithRouter(<App />);
  const all = screen.getByRole('button', { name: /All/i });
  expect(all).toBeInTheDocument();
  userEvent.click(all);
});
