import styled from "styled-components";
import { theme } from "@/styles/theme";
import { LabelMedium } from "@/styles/typography";
import { Constants as C } from "@/constants/Constants";

export const Container = styled.button`
  ${LabelMedium}

  border-radius: 2rem;
  border: 0px;

  color: ${theme.onPrimaryContainer};
  background-color: ${theme.primaryContainer};

  padding: 1rem 2rem;
  margin: 1rem;

  width: 30rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.primaryContainer};
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
  }

  @media ${C.mediaQueries.mobile} {
    width: 90%;
  };
`;
