import styled from "styled-components";

export const StyledStaticClock = styled.span`
  font-family: ${({ theme }) => theme.fonts.families.IBMPlexMono};
  font-weight: ${({ theme }) => theme.fonts.weights.text};
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: ${({ theme }) => theme.colors.grey};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    text-align: left;
  }
`