import { render, screen, fireEvent, act } from "@testing-library/react";
import ModalAddProducer from ".";

jest.mock("../../atoms/button", () => ({
  __esModule: true,
  default: ({ children, onClick, variant }: any) => (
    <button onClick={onClick} className={variant}>
      {children}
    </button>
  ),
}));

describe("ModalAddProducer", () => {
  it("deve renderizar o modal com o título 'Adicionar Novo Produtor'", () => {
    render(<ModalAddProducer onClose={() => {}} onSubmit={() => {}} />);

    expect(screen.getByText("Adicionar Novo Produtor")).toBeInTheDocument();
  });

  it("deve renderizar os campos de nome e CPF/CNPJ", () => {
    render(<ModalAddProducer onClose={() => {}} onSubmit={() => {}} />);

    expect(screen.getByLabelText("Nome:")).toBeInTheDocument();
    expect(screen.getByLabelText("CPF / CNPJ:")).toBeInTheDocument();
  });

  it("deve alternar a máscara de CPF para CNPJ ao clicar em 'É CNPJ?'", async () => {
    render(<ModalAddProducer onClose={() => {}} onSubmit={() => {}} />);

    expect(screen.getByLabelText("CPF / CNPJ:")).toHaveValue("");

    await act(async () => {
      fireEvent.click(screen.getByLabelText("É CNPJ?"));
    });

    expect(screen.getByLabelText("CPF / CNPJ:")).toHaveValue("");

    await act(async () => {
      fireEvent.click(screen.getByLabelText("É CNPJ?"));
    });

    expect(screen.getByLabelText("CPF / CNPJ:")).toHaveValue("");
  });

  it("deve chamar a função onClose quando o botão 'Cancelar' for clicado", async () => {
    const handleClose = jest.fn();
    render(<ModalAddProducer onClose={handleClose} onSubmit={() => {}} />);

    const cancelButton = screen.getByText("Cancelar");
    expect(cancelButton).toBeInTheDocument();

    act(() => {
      fireEvent.click(cancelButton);
    });

    expect(handleClose).toHaveBeenCalled();
  });
});
