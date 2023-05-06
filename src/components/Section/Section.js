import { SectionEl, Title } from './Section.jsx';
import { Container } from './Container.jsx';

export function Section({ title, children }) {
  return (
    <SectionEl>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionEl>
  );
}
