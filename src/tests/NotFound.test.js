import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

test('verifica se a page possui uma heading "Page requested not found"', () => {
  renderWithRouter(<NotFound />);
  const captureHeading = screen
    .getByRole('heading', { name: /Page requested not found Crying emoji/i, level: 2 });
  expect(captureHeading).toBeInTheDocument();
});
test('verifica se a page possui a imagem com o src desejado', () => {
  renderWithRouter(<NotFound />);
  const srcLink = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const captureAlt = screen
    .getByAltText(/Pikachu crying because the page requested was not found/i);
  const captureImage = screen.getAllByRole('img',
    { alt: /Pikachu crying because the page requested was not found/i });
  expect(captureImage[1]).toBeInTheDocument();
  expect(captureImage[1].src).toContain(srcLink);
  expect(captureAlt).toBeInTheDocument();
});
