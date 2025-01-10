import { render, screen } from "@testing-library/react";
import CustomLink from ".";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("CustomLink Component", () => {
  it("deve renderizar o link com o texto correto", () => {
    renderWithRouter(<CustomLink to="/home">Home</CustomLink>);
    const linkElement = screen.getByRole("link", { name: /home/i });
    expect(linkElement).toBeInTheDocument();
  });

  it("deve renderizar com o atributo 'to' correto", () => {
    renderWithRouter(<CustomLink to="/about">Sobre</CustomLink>);
    const linkElement = screen.getByRole("link", { name: /sobre/i });
    expect(linkElement).toHaveAttribute("href", "/about");
  });

  it("deve renderizar com o estilo variante 'primary'", () => {
    renderWithRouter(
      <CustomLink to="/services" variant="primary">
        Serviços
      </CustomLink>
    );
    const linkElement = screen.getByRole("link", { name: /serviços/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("variant", "primary");
  });

  it("deve renderizar com o estilo variante 'secondary'", () => {
    renderWithRouter(
      <CustomLink to="/services" variant="secondary">
        Serviços
      </CustomLink>
    );
    const linkElement = screen.getByRole("link", { name: /serviços/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("variant", "secondary");
  });
});
