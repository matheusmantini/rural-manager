import React from "react";
import { StyledLink } from "./link.style";
import { iLinkProps } from "../../../types/linkProps.type";

const CustomLink: React.FC<iLinkProps> = ({
  to,
  variant = "primary",
  disabled = false,
  children,
}) => {
  return (
    <StyledLink
      to={disabled ? "#" : to}
      variant={variant}
      style={disabled ? { pointerEvents: "none", opacity: 0.6 } : {}}
    >
      {children}
    </StyledLink>
  );
};

export default CustomLink;
