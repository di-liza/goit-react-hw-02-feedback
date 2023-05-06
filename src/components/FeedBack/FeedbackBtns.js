import { Button, ButtonsList } from './FeedbackBtns.jsx';

export function FeedBackBtns() {
  return (
    <ButtonsList>
      <li>
        <Button>Good</Button>
      </li>
      <li>
        <Button>Neutral</Button>
      </li>
      <li>
        <Button>Bad</Button>
      </li>
    </ButtonsList>
  );
}
