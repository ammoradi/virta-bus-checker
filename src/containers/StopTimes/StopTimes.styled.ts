import styled from "styled-components";

export const StyledStopTimes = styled.main`
  width: 100%;
`

export const StyledSlug = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
`

export const StyledDataWrapper = styled.div`
  margin-left: 4px;
  max-width: 608px;
  padding-bottom: 100px;
`

export const StyledTitle = styled.h1`
  margin: 80px 0 32px 0;
  height: 128px;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 54px;
  line-height: 120px;
  letter-spacing: -0.6px;
`