import Menu from "../../molecules/menu";
import { StyledHeader, Logo, Content } from "./header.style";

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Rural Manager</Logo>
      <Content>
        <Menu />
      </Content>
    </StyledHeader>
  );
};

export default Header;
