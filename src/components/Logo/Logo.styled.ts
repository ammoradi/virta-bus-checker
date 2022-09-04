import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 80px;
  position: sticky;
  top: 48px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    position: static;
  }
`