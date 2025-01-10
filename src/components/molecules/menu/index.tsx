import MenuButton from "../../atoms/menuButton";
import { StyledMenu } from "./menu.style";

const Menu = () => {
  return (
    <StyledMenu>
      <MenuButton label="Dashboard" pathToGo={"/"} />
      <MenuButton label="Produtor" pathToGo={"/produtor"} />
    </StyledMenu>
  );
};

export default Menu;
