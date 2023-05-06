import PropTypes from 'prop-types';

import { Section } from '../Section/Section.js';
import { Notification } from '../Notifications/Notifications.js';
import { Value, StatsItem, StatsList } from './Statistics.jsx';

export function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <Section title="Statistics">
      {total !== 0 ? (
        <>
          <StatsList>
            <StatsItem>
              <Value>Good: {good}</Value>
            </StatsItem>
            <StatsItem>
              <Value>Neutral: {neutral}</Value>
            </StatsItem>
            <StatsItem>
              <Value>Bad: {bad}</Value>
            </StatsItem>
          </StatsList>
          <StatsList>
            <StatsItem>
              <Value>Total: {total || 0}</Value>
            </StatsItem>
            <StatsItem>
              <Value>Posititve Feedback: {positivePercentage || 0}%</Value>
            </StatsItem>
          </StatsList>
        </>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </Section>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
