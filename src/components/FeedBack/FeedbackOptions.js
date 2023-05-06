import PropTypes from 'prop-types';

import { Section } from '../Section/Section';
import { Button, ButtonsList } from './FeedbackOptions.jsx';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <Section title="Please leave feedback">
        <ButtonsList>
          {options.map(option => (
            <Button
              key={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          ))}
        </ButtonsList>
      </Section>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
