import { Constants } from "@/constants/Constants";
import styled from "styled-components";

export const Container = styled.div<{ position: string }>`
  position: relative;

  width: 100%;
  min-width: 300px;
  height: 10rem;

  top: ${({ position }) => (position === "top" ? "0" : "auto")};
  bottom: ${({ position }) => (position === "bottom" ? "0" : "auto")};

  z-index: 1;

  transition: all 0.2s ease-in;

  & > img {
    min-width: 300px;
  }
`;
