import React from "react"
import styled from "styled-components"
import { DateTime } from "luxon"
import Card from "components/card"
import { colors } from "constants"

const activities = [
  { user: "Garry Osborn", timestamp: "2014-08-06T13:07:04.054", value: 620.1 },
  { user: "Em Davida", timestamp: "2014-08-06T13:07:04.054", value: 1238.12 },
  { user: "Levi Laurissa", timestamp: "2014-08-06T13:07:04.054", value: 3141.5 }
]

export default props => {
  return (
    <ActivityCard>
      <p className="title">Recent Activity</p>
      <ActivityList>
        {activities.map((activity, i) => {
          const date = DateTime.fromISO(activity.timestamp).toFormat("MMM dd t")
          return (
            <Activity key={i} className="mdi mdi-code-tags">
              <div className="user">
                <img src="http://i.pravatar.cc/100" className="user__image" />
                <div className="user__copy">
                  <p>{activity.user}</p>
                  <p className="small">{date}</p>
                </div>
              </div>
              <div className="description">
                <p>
                  Submitted a project <code>Teaching App</code>
                </p>
                <p className="price">${activity.value.toFixed(2)}</p>
              </div>
            </Activity>
          )
        })}
      </ActivityList>
    </ActivityCard>
  )
}

const ActivityCard = styled(Card)`
  margin: 1rem;
  .title {
    margin-bottom: 2rem;
  }
`

const ActivityList = styled.ul`
  list-style: none;
  margin: 0;
  margin-left: 1.5rem;
  padding: 0;
`

const Activity = styled.li`
  position: relative;
  margin-bottom: 1rem;
  .user {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
  }
  .user__image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .user__copy {
    margin-left: 2rem;
  }
  .description {
    padding: 1rem 1rem 1rem 2rem;
    margin-left: 2.5rem;
    border-left: 1px solid ${colors.grey_500};
  }
  .price {
    margin-top: 2rem;
    font-weight: 500;
  }
  code {
    padding: 0.25rem 0.5rem;
    background: ${colors.grey_300};
    border-radius: 0.25rem;
  }
  &:before {
    position: absolute;
    top: 1rem;
    left: -1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.grey_300};
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
`
