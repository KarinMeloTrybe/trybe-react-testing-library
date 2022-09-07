import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('verifica se a page possui o texto About Pokédex', () => {
  renderWithRouter(<About />);
  const captureHeading = screen
    .getByRole('heading', { name: /about pokédex/i, level: 2 });
  expect(captureHeading).toBeInTheDocument();
});
test('verifica se a page possui dois parágrafos sobre pokédex', () => {
  renderWithRouter(<About />);
  const captureParagraph = screen
    .getAllByText(/pokémons/i);
  expect(captureParagraph).toHaveLength(2);
});
test('verifica se a page possui uma imagem de uma pokédex', () => {
  renderWithRouter(<About />);
  const srcLink = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  const captureAlt = screen.getByAltText(/pokédex/i);
  const captureImage = screen.getByRole('img', { alt: /pokédex/i });
  expect(captureImage).toBeInTheDocument();
  expect(captureImage.src).toContain(srcLink);
  expect(captureAlt).toBeInTheDocument();
});
