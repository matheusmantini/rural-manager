import { useLocation } from "react-router-dom";
import { StyledButton } from "./menuButton.style";
import { IMenuButton } from "../../../types/menuButton.type";

const MenuButton: React.FC<IMenuButton> = ({ label, pathToGo }) => {
  const location = useLocation();
  const isActive = location.pathname === pathToGo;

  return (
    <StyledButton to={pathToGo} className={isActive ? "active" : ""}>
      {label}
    </StyledButton>
  );
};

export default MenuButton;
