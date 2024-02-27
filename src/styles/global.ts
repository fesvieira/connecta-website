import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const AppContainer = styled.div`
  height: 100dvh;
  min-height: 700px;
  min-width: 300px;

  transition: all 0.2s ease-in-out;

  background-image: linear-gradient(to bottom, #2c488e, #011044);
  color: white;
`;

export const TitleMedium = styled.p<{ $margin?: string }>`
  font-size: 2rem;
  font-weight: bold;

  margin: ${({ $margin }) => $margin};
`;

export const TextBodyMedium = styled.p<{ $margin?: string }>`
  font-size: 1.125rem;

  margin: ${({ $margin }) => $margin};
`;

export const TextBodyBold = styled.p<{ $margin?: string }>`
  font-size: 1.125rem;
  font-weight: bold;

  margin: ${({ $margin }) => $margin};
`;
