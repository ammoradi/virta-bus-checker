import React from 'react'

import { Logo } from 'components/Logo'
import { Clock } from 'components/Clock'

import {StyledHeader, StyledHeaderText} from './Header.styled'

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <StyledHeaderText>Buses arriving to</StyledHeaderText>
      <Clock realtime />
    </StyledHeader>
  )
}

export default Header