import { FooterContainer, FooterText } from "./footer.style";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterText>
        © {currentYear} Rural Manager. Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
