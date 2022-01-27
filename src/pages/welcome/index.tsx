import { NextPage } from 'next';
import styled from 'styled-components';

import React from 'react';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Greet = styled.h1`
  font-size: 80px;
  font-weight: bolder;
  background-color: #048abf;
  background-image: linear-gradient(45deg, #f24f1d, #048abf);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Welcome: NextPage = () => (
  <Container>
    <Greet>Obrigado.</Greet>
  </Container>
);

export default Welcome;
