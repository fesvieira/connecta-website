import { FC, useState } from "react";
import { Container } from "./styles";

export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  onClick: () => void;
}

export const AppButton: FC<AppButtonProps> = ({
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
  
  return <Container onClick={debouncedOnClick} {...props} />;
};
