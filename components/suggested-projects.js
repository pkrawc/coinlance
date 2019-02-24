import React, { useLayoutEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { DateTime } from "luxon"
import { colors } from "constants"
import Tag from "components/tag"
import Card from "components/card"

export default props => {
  return (
    <Wrapper>
      <Title>Suggested Projects</Title>
      <Project
        name="Alberto Donko"
        type="ruby"
        timestamp="2017-05-15T08:30:00"
        description="I need an app to help my students keep track of their homework time. It needs a log in and a way to upload completed work."
        coins={[{ type: "BTC", value: 0.2 }, { type: "ETH", value: 1.1 }]}
      />
      <Project
        name="Serena Janet"
        type="html/css"
        timestamp="2017-05-15T08:30:00"
        description="I need an app to help my students keep track of their homework time. It needs a log in and a way to upload completed work."
        coins={[{ type: "BTC", value: 0.2 }, { type: "ETH", value: 3 }]}
      />
      <Project
        name="Trent Merv"
        type="java"
        timestamp="2017-05-15T08:30:00"
        description="I need an app to help my students keep track of their homework time. It needs a log in and a way to upload completed work."
        coins={[{ type: "BTC", value: 0.1 }, { type: "ETH", value: 1 }]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem;
`

const Title = styled.p`
  margin: 4rem 0 0;
`

const usePrice = coins => {
  const [currentPrices, setPrices] = useState({})
  const getPrices = async () => {
    try {
      const key = "99398fb57a1a13134e89a660b465ef9a4fb2c9ad032637bf0edcfc940cf5c14c"
      const coinNames = coins.map(p => p.type).join(",")
      const url = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinNames}&tsyms=USD&api_key=${key}`
      const { data } = await axios(url)
      setPrices(data)
    } catch (err) {
      console.error(err)
    }
  }
  useLayoutEffect(() => {
    getPrices()
  }, [])
  return currentPrices
}

const Project = ({ name, timestamp, type, description, coins }) => {
  const dt = DateTime.fromISO(timestamp).toFormat("MMM dd t")
  const prices = usePrice(coins)
  const total = Object.values(prices).reduce(
    (total, price, i) => total + price.USD * coins[i].value,
    0.0
  )
  return (
    <ProjectCard>
      <Client>
        <img src="http://i.pravatar.cc/300" />
        <p className="name">{name}</p>
        <p className="timestamp">{dt}</p>
      </Client>
      <Tag>{type}</Tag>
      <Description>{description}</Description>
      <Price>
        {coins.map((coin, i) => (
          <Tag key={i}>
            {coin.type} {coin.value}
          </Tag>
        ))}
        <p>${total.toFixed(2)}</p>
      </Price>
    </ProjectCard>
  )
}

const ProjectCard = styled(Card)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 1rem;
  ${Tag} {
    align-self: center;
    justify-self: end;
  }
`

const Client = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  img {
    grid-row: span 2;
    display: inline-block;
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.12);
  }
  .name {
    font-weight: 500;
  }
  .timestamp {
    font-size: 1.25rem;
  }
`

const Description = styled.p`
  grid-column: span 2;
  margin-top: 2rem;
`

const Price = styled.section`
  grid-column: span 2;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${colors.grey_500};
  ${Tag} {
    margin-right: 1rem;
  }
  p {
    margin-left: auto;
  }
`
