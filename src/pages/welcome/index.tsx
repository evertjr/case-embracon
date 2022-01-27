import { NextPage } from 'next';
import React from 'react';

import { Container, Greet } from './styles';

const Welcome: NextPage = () => (
  <Container>
    <Greet>Obrigado.</Greet>
  </Container>
);

export default Welcome;
