import styled from "styled-components";
import { TitleMedium } from "./typography";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 0 1rem;

  height: 100dvh;
  min-height: 700px;
  min-width: 300px;

  transition: all 0.2s ease-in-out;

  background-image: linear-gradient(to bottom, #2c488e, #011044);
  color: white;

  & > h1 {
    ${TitleMedium}

    text-align: center;

    z-index: 2;
    margin-bottom: 4rem;
  }

  & > p {
    text-align: center;
    z-index: 2;
  }
`;
