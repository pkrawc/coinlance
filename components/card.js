import styled from "styled-components"
import { colors } from "constants"

const Card = styled.div`
  padding: ${({ p = 2 }) => p}rem;
  background: ${colors.blue_100};
  border-radius: 0.75rem;
  box-shadow: 0 2rem 3rem -1rem rgba(0, 0, 0, 0.12);
`

export default Card
