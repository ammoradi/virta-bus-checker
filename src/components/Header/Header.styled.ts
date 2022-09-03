import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 128px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const StyledHeaderText = styled.p`
  margin: 0;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 20px;
  line-height: 32;
`