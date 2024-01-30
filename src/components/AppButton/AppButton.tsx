import { FC } from "react";

export type AppButtonProps = {
  text: string;
  debounce: number;
  isLoading: boolean;
  isEnabled: boolean;
  onClick: () => undefined;
};

export const AppButton: FC = ({ props: AppButtonsProps }) => {
  return (
    <>
      <h1>AppButton</h1>
    </>
  );
};
