import { render, screen, fireEvent } from "@testing-library/react";
import { iButtonProps } from "../../../types";
import CustomButton from ".";

jest.mock("./button.style", () => ({
  Button: ({ children, ...props }: iButtonProps) => (
    <button {...props}>{children}</button>
  ),
}));

describe("CustomButton", () => {
  it("deve renderizar o botão com o texto correto", () => {
    render(<CustomButton onClick={() => {}}>Clique aqui</CustomButton>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Clique aqui");
  });

  it("deve chamar a função onClick quando o botão for clicado", () => {
    const onClickMock = jest.fn();
    render(<CustomButton onClick={onClickMock}>Clique aqui</CustomButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar com o estilo variante 'primary'", () => {
    render(<CustomButton onClick={() => {}} variant="primary">Clique aqui</CustomButton>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("variant", "primary");
  });
});
