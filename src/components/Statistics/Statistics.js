import { Value, Num, StatsItem, StatsList } from './Statistics.jsx';

export function Stats({ Good, Bad, Neutral }) {
  return (
    <StatsList>
      <StatsItem>
        <Value>Good: {Good}</Value>
      </StatsItem>
      <StatsItem>
        <Value>Neutral: {Neutral}</Value>
      </StatsItem>
      <StatsItem>
        <Value>Bad: {Bad}</Value>
      </StatsItem>
    </StatsList>
  );
}

export function StatsProc() {
  return (
    <StatsList>
      <StatsItem>
        <Value>Total:</Value>
        <Num>0</Num>
      </StatsItem>
      <StatsItem>
        <Value>Posititve Feedback:</Value>
        <Num>0</Num>
      </StatsItem>
    </StatsList>
  );
}
