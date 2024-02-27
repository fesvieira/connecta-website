import { FC, useState } from "react";
import { AppButtonContainer } from "./styles";

export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick: () => void;
}

export const AppButton: FC<AppButtonProps> = ({
  label,
  onClick,
  ...props
}: AppButtonProps) => {
  const [isEnabled, setIsEnabled] = useState(true);

  const debouncedOnClick = () => {
    if (isEnabled) {
      setIsEnabled(false);
      onClick();
      setTimeout(() => {
        setIsEnabled(true);
      }, 1000);
    }
  };

  return (
    <AppButtonContainer onClick={debouncedOnClick} {...props}>
      {label}
      {props.children}
    </AppButtonContainer>
  );
};
