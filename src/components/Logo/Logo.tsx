import React from 'react'

import {StyledLogo} from './Logo.styled'
import LogoImage from 'assets/images/logo.png'

function Logo(): JSX.Element {
  return (
    <StyledLogo src={LogoImage} alt="Virta Ltd." />
  )
}

export default Logo;