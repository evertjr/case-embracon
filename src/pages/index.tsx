import React from 'react';
import type { NextPage } from 'next';
import Input from '../components/Input';

const Home: NextPage = () => (
  <>
    <h1>Form</h1>
    <Input type="text" label="Nome" />
    <Input type="email" label="E-mail" hasError message="aasdasd" />
    <Input type="text" label="CEP" />
  </>
);
export default Home;
