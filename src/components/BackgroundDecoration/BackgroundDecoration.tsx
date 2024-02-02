import { FC } from "react";
import Image from "next/image";
import { Container } from "./styles";

export type BackgroundDecorationProps = {
  src: string;
  position: Position;
};

export enum Position {
  Top = "top",
  Bottom = "bottom",
}

export const BackgroundDecoration: FC<BackgroundDecorationProps> = ({
  src,
  position,
  ...props
}) => {
  return (
    <Container position={position} {...props}>
      <Image src={src} alt="Connecta" layout="fill" objectFit="fill" />
    </Container>
  );
};
