import { ReactNode } from 'react';

import { Container } from './styles';

interface WorkSkillsProps {
  children: ReactNode;
}

function WorkSkills({ children }: WorkSkillsProps) {
  return (
    <Container>
      <h1>workSkills</h1>
      {children}
    </Container>
  );
};

export default workSkills;
