import styled from "styled-components"
import { colors } from "constants"
import Card from "components/card"
import Button from "components/button"
import Earnings from "components/earnings"
import Rank from "components/rank"
import SuggestedProjects from "components/suggested-projects"
import RecentActivity from "components/recent-activity"

export default props => {
  return (
    <>
      <Header>
        <div className="action-bar">
          <span className="mdi mdi-menu" />
          <p>Alex Doe</p>
        </div>
      </Header>
      <Earnings />
      <Rank />
      <SuggestedProjects />
      <SlackCard>
        <img src="/static/slack-logo.png" alt="" className="slack-logo" />
        <h3 className="title">Join the conversation on Slack</h3>
        <p>
          Stay up to date on the latest news and special programs that only take place within the
          slack channel.
        </p>
        <div className="actions">
          <Button color={colors.blue_100}>remind later</Button>
          <Button primary>join now</Button>
        </div>
      </SlackCard>
      <RecentActivity />
    </>
  )
}

const Header = styled.header`
  height: 20rem;
  padding: 2rem;
  background: ${colors.blue_500};
  color: ${colors.blue_100};
  .action-bar {
    display: flex;
    align-items: center;
    .mdi-menu {
      margin-right: auto;
    }
  }
`

const SlackCard = styled(Card)`
  background: ${colors.blue_500};
  margin: 2rem 1rem;
  color: ${colors.blue_100};
  text-align: center;
  .slack-logo {
    display: block;
    margin: 0 auto 2rem;
    width: 8rem;
    height: 8rem;
  }
  .title {
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .actions {
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    button {
      display: block;
    }
    button:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`
