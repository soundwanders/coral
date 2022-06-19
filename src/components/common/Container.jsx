import styled, { keyframes } from 'styled-components';

export const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1.0;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 97vh;
  background: transparent;
  border: 0px solid transparent;
  border-radius: 2rem;
  animation: 1.3s ease-in-out 0s 1 ${Fade};
  background: linear-gradient(to bottom right, #eaf5ff 66%, #ffe4ce 100%);

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: 100%;
    padding: 0;
    margin: 0;
    background: linear-gradient(to bottom, #eaf5ff 75%, #ffe4ce 100%);
  }
`;
