import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Constants as C } from "@/constants/Constants";

export const AppButtonContainer = styled.button`
  font-size: 1.125rem;
  font-weight: bold;

  border-radius: 2rem;
  border: 0px;

  color: ${theme.onPrimaryContainer};
  background-color: ${theme.primaryContainer};

  padding: 1rem 2rem;
  margin: 1rem;

  width: 30rem;

  transition: all 0.2s ease-in-out;

  z-index: 2;

  overflow: hidden;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }

  @media ${C.mediaQueries.mobile} {
    width: calc(100% - 2rem);
  }
`;
