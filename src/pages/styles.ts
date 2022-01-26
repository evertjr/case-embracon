import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1024px;

  aside {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 48px;

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
      font-size: xx-large;
      font-weight: lighter;
      color: white;
    }
    h2 {
      margin-top: 24px;
      font-size: larger;
      font-weight: bold;
      color: white;
    }
  }
`;
export const FormArea = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
