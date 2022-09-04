import styled from "styled-components";

import {StyledStaticClock} from 'components/Clock'

export const StyledBusCard = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 56px;
  margin-bottom: 8px;
`

export const StyledBusIconAndName = styled.div`
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

export const StyledBusName = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.graphite};
  padding-left: 16px;
`

export const StyledArrivalTime = styled(StyledStaticClock)`
  display: inline-block;
  width: 192px;
`