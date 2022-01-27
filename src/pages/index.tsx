import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Input from '../components/Input';
import { sanitizeCep } from '../utils/sanitizeCep';
import { validateEmail } from '../utils/validateEmail';
import { hasNumbers } from '../utils/hasNumbers';

import * as S from '../styles/Home.styles';

const Home: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cepError, setCepError] = useState(false);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      try {
        if (name.length < 3 || hasNumbers(name)) {
          setNameError(true);
          return;
        }

        if (!email || !validateEmail(email)) {
          setEmailError(true);
          return;
        }

        const sanitizedCep = sanitizeCep(cep);
        if (sanitizedCep.length < 8 || !sanitizedCep) {
          setCepError(true);
          return;
        }
        fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`).then(response =>
          response.json().then(data => {
            if (data.erro) {
              setCepError(true);
              return;
            }
            Router.push('/welcome');
          }),
        );
      } catch (err) {
        console.log('error');
      }
    },
    [
      name,
      email,
      cep,
      sanitizeCep,
      hasNumbers,
      setEmailError,
      setNameError,
      setCepError,
    ],
  );

  const handleNameChange = useCallback(event => {
    setName(event.target.value);
    setNameError(false);
  }, []);
  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
    setEmailError(false);
  }, []);
  const handleCepChange = useCallback(event => {
    setCep(event.target.value);
    setCepError(false);
  }, []);

  return (
    <S.Container>
      <aside>
        <S.Logo src="logo-embracon.svg" alt="logo embracon" width={150} />
        <h1>Belíssima frase de efeito para chamar sua atenção, wow!</h1>
        <h2>Eu sei que você quer preencher este formulário... Vá em frente.</h2>
      </aside>
      <S.FormArea>
        <form onSubmit={handleSubmit}>
          <h3>Não iremos vender seus dados 😳</h3>
          <Input
            type="text"
            name="name"
            label="Nome"
            placeholder="Digite seu nome aqui..."
            hasError={nameError}
            onChange={handleNameChange}
            errorMessage="Por favor, digite seu nome completo."
          />
          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail aqui..."
            onChange={handleEmailChange}
            hasError={emailError}
            errorMessage="Por favor, digite um e-mail válido."
          />
          <Input
            type="text"
            name="cep"
            label="CEP"
            placeholder="Digite seu CEP aqui..."
            onChange={handleCepChange}
            hasError={cepError}
            errorMessage="Por favor, digite um CEP válido."
          />
          <button type="submit">Enviar</button>
        </form>
      </S.FormArea>
    </S.Container>
  );
};

export default Home;
