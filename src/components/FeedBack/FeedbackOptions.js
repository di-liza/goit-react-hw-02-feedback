import PropTypes from 'prop-types';

import { Section } from '../Section/Section';
import { Button, ButtonsList } from './FeedbackOptions.jsx';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <Section title="Please leave feedback">
        <ButtonsList>
          {options.map(option => (
            <li key={option}>
              <Button
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </Button>
            </li>
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
