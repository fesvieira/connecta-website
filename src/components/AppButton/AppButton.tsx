import { FC } from "react";
import { Container, Label } from "./styles";

export type AppButtonProps = {
  text: string;
  debounce: number;
  isLoading: boolean;
  isEnabled: boolean;
  onClick: () => undefined;
};

export const AppButton: FC = ({ props: AppButtonsProps }) => {
  return (
    <Container>
      <Label>Test</Label>
    </Container>
  );
};
