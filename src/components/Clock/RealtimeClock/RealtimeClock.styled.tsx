import styled from "styled-components";

export const StyledRealtimeClock = styled.h2`
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 54px;
  line-height: 65;
  color: ${({ theme }) => theme.colors.graphite};
  margin: 0;
`