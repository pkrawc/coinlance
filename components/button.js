import styled from "styled-components"
import { colors } from "constants"

export default styled.button`
  all: unset;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ color = colors.blue_500 }) => color};
  border: 2px solid ${({ color = colors.blue_500 }) => color};
  text-align: center;
  ${({ primary }) =>
    primary &&
    `
    background: ${colors.blue_700};
    border: 2px solid transparent;
    color: ${colors.blue_100};
  `}
`
