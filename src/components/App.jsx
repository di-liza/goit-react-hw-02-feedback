import { Component } from 'react';
import {PropTypes} from 'prop-types'

import { StatisticsTitle, FeedBackTitle } from './SectionTitles/SectionTitles'
import { Stats, StatsProc } from './Statistics/Statistics';

import {Section, Container} from 'constatnts'
import { Button, ButtonsList } from './FeedBack/FeedbackBtns.jsx';

export class App extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueBad: 0,
    initialValueNeutral: 0,
  };

  static propTypes = {
    initialValueGood: PropTypes.number,
    initialValueBad: PropTypes.number,
    initialValueNeutral: PropTypes.number,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  incrementValueGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  incrementValueBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  incrementValueNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  getTotal = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  getPositivePercentage = () => {
    const total = this.getTotal();
    if (total === 0) {
      return 0;
    }
    const positive = this.state.good;
    return Math.round((positive / total) * 100) + '%';
  };

  render() {
    const total = this.getTotal();
    const positivePercentage = this.getPositivePercentage();

    return (
      <>
        <Section>
          <Container>
            <FeedBackTitle />
            <ButtonsList>
              <li>
                <Button onClick={this.incrementValueGood}>Good</Button>
              </li>
              <li>
                <Button onClick={this.incrementValueNeutral}>Neutral</Button>
              </li>
              <li>
                <Button onClick={this.incrementValueBad}>Bad</Button>
              </li>
            </ButtonsList>
          </Container>
        </Section>

        <Section>
          <Container>
            <StatisticsTitle />
            <Stats Good={this.state.good} Bad={this.state.bad} Neutral={this.state.neutral} />
            <StatsProc PositivePercentage={positivePercentage} />
            <p>Total: {total || 0}</p>
            <p>Posititve Feedback: {positivePercentage || 0}</p>
          </Container>
        </Section>
      </>
    );
  }
}
