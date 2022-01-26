import React, { useCallback, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Input from '../components/Input';

const Home: NextPage = () => {
  const formRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [cep, setCep] = useState('');

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    console.log(formRef);

    setHasError(true);
  }, []);

  // const validateCep = useCallback(event => {
  //   setCep(event.target.value);
  //   const cep: string = event.target.value;
  //   const sanitizedCep = cep.replace(/./, '');
  //   console.log(cep);

  //   console.log(sanitizedCep);

  //   if (sanitizedCep.length == 8) {
  //   }
  // }, []);

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" name="name" label="Nome" />
        <Input
          type="email"
          name="name"
          label="E-mail"
          hasError={hasError}
          message="Por favor, digite um e-mail válido"
        />
        <Input type="text" name="cep" label="CEP" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Home;
