import React from 'react';
import {screen} from '@testing-library/react';

import {renderWithThemeProvider} from 'utils/testUtils';
import LogoImage from 'assets/images/logo.png';

import Logo from './Logo';

describe('<Logo />', () => {
  it('should display the correct logo image', () => {
    renderWithThemeProvider(<Logo />);

    expect(screen.getByRole('img')).toHaveAttribute('src', LogoImage);
  });

  it('should render with the correct alt text', () => {
    renderWithThemeProvider(<Logo />);

    expect(screen.getByAltText('Virta Ltd.')).toBeInTheDocument();
  })
})