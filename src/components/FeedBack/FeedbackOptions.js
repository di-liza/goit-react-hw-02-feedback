import PropTypes from 'prop-types';

import { Section } from '../Section/Section';
import { Button, ButtonsList } from './FeedbackOptions.jsx';

export function FeedBackBtns({
  onClickBtnGood,
  onClickBtnNeutral,
  onClickBtnBad,
}) {
  return (
    <div>
      <Section title="Please leave feedback">
        <ButtonsList>
          <li>
            <Button onClick={onClickBtnGood}>Good</Button>
          </li>
          <li>
            <Button onClick={onClickBtnNeutral}>Neutral</Button>
          </li>
          <li>
            <Button onClick={onClickBtnBad}>Bad</Button>
          </li>
        </ButtonsList>
      </Section>
    </div>
  );
}

FeedBackBtns.propTypes = {
  onClickBtnGood: PropTypes.func.isRequired,
  onClickBtnNeutral: PropTypes.func.isRequired,
  onClickBtnBad: PropTypes.func.isRequired,
};
