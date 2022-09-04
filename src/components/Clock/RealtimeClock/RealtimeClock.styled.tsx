import styled from "styled-components";

export const StyledRealtimeClock = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 54px;
  color: ${({ theme }) => theme.colors.graphite};
  margin: 0;
  line-height: 42px;
  height: 50px;
  letter-spacing: -0.6px;
  position: sticky;
  top: 48px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 16px;
    height: unset;
    line-height: 24px;
    position: static;
  }
`