import React from "react"
import styled from "styled-components"
import { colors } from "constants"
import Tag from "components/tag"
import Card from "components/card"

export default props => {
  return (
    <RankCard>
      <Ranking>
        <Title>Rank</Title>
        <h2>
          <span className="mdi mdi-star" /> 607
        </h2>
        <Small>You're in the top 40%</Small>
      </Ranking>
      <Projects>
        <p>Projects</p>
        <h2>
          <span className="mdi mdi-code-tags" /> 45
        </h2>
        <Small>10 in this month</Small>
      </Projects>
      <Categories>
        <Title>Top Categories</Title>
        <Tag>ruby</Tag>
        <Tag>clojure</Tag>
        <Tag>java</Tag>
      </Categories>
    </RankCard>
  )
}

const RankCard = styled(Card)`
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  h2 {
    margin-top: 1rem;
  }
  .mdi {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: ${colors.blue_500};
    color: ${colors.blue_100};
    margin-right: 1rem;
  }
`

const Title = styled.p``

const Ranking = styled.section``

const Projects = styled.section``

const Categories = styled.section`
  grid-column: span 2;
  border-top: 1px solid ${colors.grey_500};
  ${Title} {
    margin: 1rem 0;
  }
  ${Tag} {
    margin-right: 1rem;
  }
`

const Small = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
`
