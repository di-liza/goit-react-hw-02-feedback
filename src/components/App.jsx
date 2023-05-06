import { Component } from 'react';
// import {PropTypes} from 'prop-types'


import { Statistics } from './Statistics/Statistics';

import {FeedBackBtns } from './FeedBack/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
        <FeedBackBtns
          onClickBtnGood={this.incrementValueGood}
          onClickBtnNeutral={this.incrementValueNeutral}
          onClickBtnBad={this.incrementValueBad} />
        
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={positivePercentage} />  
      </>
    );
  }
}
