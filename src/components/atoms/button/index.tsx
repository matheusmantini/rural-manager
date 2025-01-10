import React from "react";
import { Button } from "./button.style";
import { iButtonProps } from "../../../types";

const CustomButton: React.FC<iButtonProps> = ({
  onClick,
  variant = "primary",
  disabled = false,
  children,
  ...props
}) => {
  return (
    <Button variant={variant} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
