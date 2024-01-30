import { Inter } from "next/font/google";
import { css } from "styled-components";

const inter = Inter({ subsets: ["latin-ext"] });

const normal = 400;
const bold = 700;
const extrabold = 800;

export const BodyLarge = css`
  font-weight: ${normal};
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export const BodyMedium = css`
  font-weight: ${normal};
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

export const TitleMedium = css`
  font-weight: ${extrabold};
  font-size: 2rem;
`;

export const LabelMedium = css`
  font-weight: ${bold};
  font-size: 1.25rem;
  letter-spacing: 2px;
  line-height: 1.25rem;
`;
