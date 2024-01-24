import { Inter } from "next/font/google";
import { css } from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const normal = 400;
const bold = 700;
const extrabold = 800;

export const BodyLarge = css`
  font-family: ${inter};
  font-weight: ${normal};
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export const BodyMedium = css`
  font-family: ${inter};
  font-weight: ${normal};
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

export const TitleMedium = css`
  font-family: ${inter};
  font-weight: ${extrabold};
  font-size: 2rem;
`;

export const LabelMedim = css`
  font-family: ${inter};
  font-weight: ${bold};
  font-size: 2rem;
  line-height: 2rem;
`;
