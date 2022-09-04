import styled from 'styled-components';

export const StyledStopTimes = styled.main`
  width: 100%;
  
  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding-top: 64px;
  }
`;

export const StyledSlug = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    line-height: 48px;
  }
`;

export const StyledDataWrapper = styled.div`
  margin-left: 4px;
  max-width: 608px;
  padding-bottom: 100px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-left: 0;
    max-width: unset;
  }
`;

export const StyledTitle = styled.h1`
  margin: 80px 0 32px 0;
  height: 128px;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 54px;
  line-height: 120px;
  letter-spacing: -0.6px;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 28px 0 42px 0;
    font-size: 34px;
    height: 40px;
    line-height: 32px;
  }
`;