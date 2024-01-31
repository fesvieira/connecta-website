import styled from "styled-components";
import { TitleMedium } from "./typography";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 2rem;

    height: 100vh;

    background-image: linear-gradient(to bottom, #2C488E, #011044);
    color: white;

    & > h1 {
        ${TitleMedium}
    }

`
