import React, { InputHTMLAttributes, useRef } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  message?: string;
}

export default function Input({
  label,
  hasError,
  message,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container hasError={hasError}>
      <S.Label>{label}</S.Label>
      <input ref={inputRef} {...rest} />
      {hasError && <S.Message hasError>{message}</S.Message>}
    </S.Container>
  );
}
