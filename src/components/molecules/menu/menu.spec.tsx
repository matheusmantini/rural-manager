import { render, screen } from "@testing-library/react";
import Menu from ".";
import { BrowserRouter } from "react-router-dom";

describe("Menu", () => {
  test("renderiza o menu com os botões corretamente", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Produtor")).toBeInTheDocument();
  });

  test("os botões possuem os links corretos", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    const dashboardButton = screen.getByText("Dashboard");
    const produtorButton = screen.getByText("Produtor");

    expect(dashboardButton.closest("a")).toHaveAttribute("href", "/");
    expect(produtorButton.closest("a")).toHaveAttribute("href", "/produtor");
  });
});
