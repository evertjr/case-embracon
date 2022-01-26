import styled, { css } from 'styled-components';

interface ContainerProps {
  hasError?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 33px 0;

  input {
    max-width: 425px;
    height: 38px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin-top: 10px;
    transition: transform 0.2s, box-shadow 0.3s;
    padding: 8px 10px;
    color: ${props => props.theme.colors.typography.primary};

    ${props =>
      props.hasError &&
      css`
        border: 1px solid ${props.theme.colors.primary.red};
      `}

    &:focus {
      border: 1px solid ${props => props.theme.colors.secondary.lightBlue};
      box-shadow: 0px 0px 4px #55affc;
    }
  }
`;

export const Label = styled.span`
  font-size: 14px;
  margin-left: 2px;
`;

export const Message = styled.span<ContainerProps>`
  margin-top: 8px;
  margin-left: 2px;
  font-size: 12px;

  ${props =>
    props.hasError &&
    css`
      color: ${props.theme.colors.primary.red};
    `}
`;
