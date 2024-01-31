import styled from "styled-components";
import { theme } from "@/styles/theme";
import { LabelMedium } from "@/styles/typography";

export const Container = styled.button`
  ${LabelMedium}

  border-radius: 2rem;
  border: 0px;

  color: ${theme.onPrimaryContainer};
  background-color: ${theme.primaryContainer};

  padding: 1rem 2rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.primaryContainer};
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
  }
`;
