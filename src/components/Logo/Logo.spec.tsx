import React from "react";
import { render, screen } from "@testing-library/react";

import LogoImage from 'assets/images/logo.png'

import Logo from './Logo'

describe('<Logo />', () => {
  it('should display the correct logo image', () => {
    render(<Logo />)

    expect(screen.getByRole('img')).toHaveAttribute('src', LogoImage)
  })

  it('should render with the correct alt text', () => {
    render(<Logo />)

    expect(screen.getByAltText('Virta Ltd.')).toBeInTheDocument()
  })
})