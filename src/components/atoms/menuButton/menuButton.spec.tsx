import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import MenuButton from ".";

describe("MenuButton", () => {
  const renderWithRouter = (path: string) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="*" element={<MenuButton label="Dashboard" pathToGo="/" />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it("deve renderizar o MenuButton com o label correto", () => {
    renderWithRouter("/");
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("deve aplicar a classe active corretamente quando a rota atual for igual ao pathToGo", () => {
    renderWithRouter("/");
    const button = screen.getByText("Dashboard");
    expect(button).toHaveClass("active");
  });

  it("não deve aplicar a classe active quando a rota atual não for igual ao pathToGo", () => {
    renderWithRouter("/other");
    const button = screen.getByText("Dashboard");
    expect(button).not.toHaveClass("active");
  });
});
