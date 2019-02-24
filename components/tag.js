import styled from "styled-components"
import { colors } from "constants"

const Tag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  white-space: nowrap;
  display: inline-block;
  background: ${colors.grey_300};
  font-family: "IBM Plex Mono", monospace;
`

export default Tag
