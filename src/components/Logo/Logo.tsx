import React from 'react'

import {StyledLogo} from './Logo.styled'
import LogoImage from 'assets/images/logo.png'

export const LogoTestId = 'Logo'

function Logo(): JSX.Element {
  return (
    <StyledLogo src={LogoImage} alt="Virta Ltd." data-testid={LogoTestId} />
  )
}

export default Logo;