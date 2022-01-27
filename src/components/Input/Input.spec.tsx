import React from 'react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import theme from '../../styles/theme';
import Input from '.';

describe('Input component', () => {
  it('should render error message correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome aqui..."
          hasError
          errorMessage="Por favor, digite seu nome completo."
        />
      </ThemeProvider>,
    );

    expect(
      screen.getByText('Por favor, digite seu nome completo.'),
    ).toBeInTheDocument();
  });
  it('should not show error message when not needed', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input
          type="text"
          name="name"
          label="Nome"
          placeholder="Digite seu nome aqui..."
          errorMessage="Por favor, digite seu nome completo."
        />
      </ThemeProvider>,
    );

    expect(
      screen.queryByText('Por favor, digite seu nome completo.'),
    ).not.toBeInTheDocument();
  });
});
