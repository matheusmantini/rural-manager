import { render, screen } from "@testing-library/react";
import Header from ".";

jest.mock("../../molecules/menu", () => () => <div>Menu Mockado</div>);

describe("Header", () => {
  test("deve renderizar o logo com o texto 'Rural Manager'", () => {
    render(<Header />);

    expect(screen.getByText("Rural Manager")).toBeInTheDocument();
  });

  test("deve renderizar o menu", () => {
    render(<Header />);

    expect(screen.getByText("Menu Mockado")).toBeInTheDocument();
  });

  test("deve ter a estrutura do header com logo e menu", () => {
    render(<Header />);

    const logo = screen.getByText("Rural Manager");
    const menu = screen.getByText("Menu Mockado");

    expect(logo).toBeInTheDocument();
    expect(menu).toBeInTheDocument();
  });
});
