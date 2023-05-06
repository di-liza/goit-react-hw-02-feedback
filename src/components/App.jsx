import { Component } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from './FeedBack/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        this.incrementValueGood();
        break;
      case 'bad':
        this.incrementValueBad();
        break;
      case 'neutral':
        this.incrementValueNeutral();
        break;
      default:
        console.log('Unknown option');
    }
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

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    const positive = this.state.good;
    return Math.round((positive / total) * 100);
  };

  render() {
    const { good, bad, neutral } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
