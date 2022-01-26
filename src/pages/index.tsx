import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import Input from '../components/Input';
import { sanitizeCep } from '../utils/sanitizeCep';
import { validateEmail } from '../utils/validateEmail';
import { hasNumbers } from '../utils/hasNumbers';

import * as S from './styles';

const Home: NextPage = () => {
  const [hasError, setHasError] = useState({
    name: false,
    email: false,
    cep: false,
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      try {
        if (name.length < 3 || hasNumbers(name)) {
          setHasError({ ...hasError, name: true });
          return;
        }

        if (!email.includes('@') || !email || !validateEmail(email)) {
          setHasError({ ...hasError, email: true });
          return;
        }

        const sanitizedCep = sanitizeCep(cep);
        if (sanitizedCep.length < 8 || !sanitizedCep) {
          setHasError({ ...hasError, cep: true });
          return;
        } else {
          fetch(`https://viacep.com.br/ws/${sanitizedCep}/json/`).then(
            response =>
              response.json().then(data => {
                if (data.erro) {
                  setHasError({ ...hasError, cep: true });
                  return;
                }
                //armazenar as informações de endereço
              }),
          );
        }

        alert('Enviado!');
      } catch (err) {
        alert('erro');
      }
    },
    [name, email, cep, sanitizeCep, hasNumbers],
  );

  const handleNameChange = useCallback(event => {
    setName(event.target.value);
    setHasError({ ...hasError, name: false });
  }, []);
  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
    setHasError({ ...hasError, email: false });
  }, []);
  const handleCepChange = useCallback(event => {
    setCep(event.target.value);
    setHasError({ ...hasError, cep: false });
  }, []);

  return (
    <S.Container>
      <aside>
        <h1>Belíssima frase de efeito para chamar sua atenção, wow!</h1>
        <h2>
          Você realmente deveria preencher este formulário, por alguma razão.
        </h2>
      </aside>
      <S.FormArea>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            label="Nome"
            placeholder="Digite seu nome aqui..."
            hasError={hasError.name}
            onChange={handleNameChange}
            errorMessage="Por favor, digite seu nome completo."
          />
          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail aqui..."
            onChange={handleEmailChange}
            hasError={hasError.email}
            errorMessage="Por favor, digite um e-mail válido."
          />
          <Input
            type="text"
            name="cep"
            label="CEP"
            placeholder="Digite seu CEP aqui..."
            onChange={handleCepChange}
            hasError={hasError.cep}
            errorMessage="Por favor, digite um CEP válido."
          />
          <button type="submit">Enviar</button>
        </form>
      </S.FormArea>
    </S.Container>
  );
};

export default Home;
