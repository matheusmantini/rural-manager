import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";

describe("Input Component", () => {
  it("deve renderizar o label corretamente", () => {
    render(<Input label="Nome" />);

    const label = screen.getByText(/Nome/i);
    expect(label).toBeInTheDocument();
  });

  it("deve renderizar o input corretamente", () => {
    render(<Input label="Nome" />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("deve permitir digitar no input", () => {
    render(<Input label="Nome" />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "John Doe" } });

    expect(input).toHaveValue("John Doe");
  });

  it("deve passar todas as props para o input", () => {
    render(<Input label="Nome" placeholder="Digite seu nome" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("placeholder", "Digite seu nome");
  });
});
