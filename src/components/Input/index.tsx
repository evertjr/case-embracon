import React, { Children, InputHTMLAttributes, useRef } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
}

export default function Input({
  label,
  hasError,
  errorMessage,
  ...children
}: InputProps) {
  // const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container hasError={hasError}>
      <S.Label hasError={hasError}>{label}</S.Label>
      <input {...children} />
      {hasError && <S.Message hasError>{errorMessage}</S.Message>}
    </S.Container>
  );
}
