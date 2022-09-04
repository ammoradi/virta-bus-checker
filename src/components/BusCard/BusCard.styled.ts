import styled from "styled-components";

import {StyledStaticClock} from 'components/Clock'

export const StyledBusCard = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding-right: 56px;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding-right: 0;
  }
`

export const StyledBusDelayAndIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

type StyledDelayBoxProps = {
  isDelayed: boolean;
}
export const StyledDelayBox = styled.div<StyledDelayBoxProps>`
  width: 4px;
  height: 48px;
  border-radius: 0px 8px 8px 0px;
  background-color: ${({ theme, isDelayed }) => theme.colors[isDelayed ? 'red' : 'green']};
`

export const StyledBusIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 12px;
`

export const BusNameAndArrivalTime = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const StyledBusName = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.graphite};
`

export const StyledArrivalTime = styled(StyledStaticClock)`
  display: inline-block;
  min-width: 192px;
`