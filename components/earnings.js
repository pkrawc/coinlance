import React from "react"
import styled from "styled-components"
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area } from "recharts"
import { colors } from "constants"
import Card from "components/card"
import Tag from "components/tag"

const data = [
  { month: "Jan", price: 185.45 },
  { month: "Feb", price: 120.23 },
  { month: "Mar", price: 134.5 },
  { month: "Apr", price: 144.76 },
  { month: "May", price: 212.33 },
  { month: "Jun", price: 204.1 },
  { month: "Jul", price: 185.45 },
  { month: "Aug", price: 120.23 },
  { month: "Sep", price: 134.5 },
  { month: "Oct", price: 144.76 },
  { month: "Nov", price: 212.33 },
  { month: "Dec", price: 204.1 }
]

const Earnings = props => {
  return (
    <EarningsCard>
      <Title>Earnings</Title>
      <Graph height={180} width="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={colors.blue_500} stopOpacity={0.24} />
              <stop offset="50%" stopColor={colors.blue_100} stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis
            dataKey="price"
            axisLine={false}
            tickLine={false}
            width={24}
            style={{ fontSize: 12 }}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            height={24}
            style={{ fontSize: 12 }}
          />
          <Area
            dataKey="price"
            type="linear"
            stroke={colors.blue_500}
            strokeWidth={4}
            strokeLinecap="round"
            fill="url(#gradient)"
          />
        </AreaChart>
      </Graph>
      <Value>
        <h2>$2878.90</h2>
        <p className="small">
          <span className="change">+ 42</span> since last week
        </p>
      </Value>
      <TagGroup>
        <Tag>0.9087 ETH</Tag>
        <Tag>0.5 BTC</Tag>
      </TagGroup>
    </EarningsCard>
  )
}

const EarningsCard = styled(Card)`
  margin: -12rem 1rem 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`

const Title = styled.p`
  grid-column: span 2;
`

const Graph = styled(ResponsiveContainer)`
  grid-column: span 2;
`

const Value = styled.section``

const TagGroup = styled.section`
  position: relative;
  ${Tag} {
    margin-bottom: 1rem;
  }
`

export default Earnings
