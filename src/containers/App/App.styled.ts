import styled from "styled-components";

import BackgroundImage from 'assets/images/background.png'

export const StyledAppContainer = styled.div`
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: auto 342px;
  background-position: bottom right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  padding-top: 48px;

  @media only screen and (max-width: 1220px) {
    background-size: auto 296px;
  }

  @media only screen and (max-width: 1024px) {
    background-size: auto 256px;
  }

  @media only screen and (max-width: 868px) {
    background-size: auto 216px;
  }

  @media only screen and (max-width: 700px) {
    background-size: auto 196px;
  }

  @media only screen and (max-width: 600px) {
    background-size: auto 176px;
  }

  @media only screen and (max-width: 500px) {
    background-image: none;
  }
`

export const StyledLogoColumn = styled.div`
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const StyledStopTimesColumn = styled.div`
  padding-left: 125px;
  flex: 1;
`

export const StyledClockColumn = styled.div`
  width: 214px;
`