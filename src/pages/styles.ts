import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 640px) {
    /* For mobile phones: */
    flex-direction: column;
  }

  @media only screen and (min-width: 1440px) {
    /* For mobile phones: */
    max-width: 1300px;
  }

  aside {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    padding: 48px;

    @media only screen and (max-width: 640px) {
      /* For mobile phones: */
      width: 100%;
    }

    background: linear-gradient(307deg, #f24f1d, #048abf);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 8s ease infinite;
    -moz-animation: AnimationName 8s ease infinite;
    animation: AnimationName 8s ease infinite;

    @-webkit-keyframes AnimationName {
      0% {
        background-position: 0% 43%;
      }
      50% {
        background-position: 100% 58%;
      }
      100% {
        background-position: 0% 43%;
      }
    }
    @-moz-keyframes AnimationName {
      0% {
        background-position: 0% 43%;
      }
      50% {
        background-position: 100% 58%;
      }
      100% {
        background-position: 0% 43%;
      }
    }
    @keyframes AnimationName {
      0% {
        background-position: 0% 43%;
      }
      50% {
        background-position: 100% 58%;
      }
      100% {
        background-position: 0% 43%;
      }
    }

    h1 {
      font-size: 42px;
      font-weight: lighter;
      color: white;

      @media only screen and (max-width: 640px) {
        /* For mobile phones: */
        font-size: 32px;
      }
    }
    h2 {
      margin-top: 24px;
      font-size: larger;
      font-weight: bold;
      color: white;
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
  align-self: flex-start;
  /* position: absolute;
  top: 32px;
  left: 48px; */
`;

export const FormArea = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    border: solid 1px #eee;
    border-radius: 8px;
    padding: 32px;
  }

  button {
    width: 100%;
    height: 48px;
    font-weight: bold;
    border: 0;
    border-radius: 8px;
    color: #fff;
    background-color: ${props => props.theme.colors.primary.blue};
    transition: transform 0.2s, background-color 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors.primary.lightBlue};
    }
    &:active {
      background-color: ${props => props.theme.colors.primary.darkBlue};
    }
  }
`;
