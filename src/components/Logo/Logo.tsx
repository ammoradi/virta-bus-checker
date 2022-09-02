import React from 'react'

import LogoImage from 'assets/images/logo.png'

function Logo(): JSX.Element {
  return (
    <img src={LogoImage} alt="Virta Ltd." />
  )
}

export default Logo;