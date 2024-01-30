import { LabelMedium } from "@/styles/typography";
import styled from "styled-components";
import { theme } from "@/styles/theme";
export const Container = styled.button`
  display: flex;

  border-radius: 2rem;
  border: 0px;
  background-color: ${theme.primaryContainer};
`;

export const Label = styled.p`
  ${LabelMedium}

  color: ${theme.onPrimaryContainer};

  padding: 0.5rem 1rem;
  margin: 0;
`;
