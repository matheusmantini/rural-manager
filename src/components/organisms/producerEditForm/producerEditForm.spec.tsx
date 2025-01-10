import {
  render,
  fireEvent,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import ProducerEditForm from ".";

describe("ProducerEditForm", () => {
  const mockInitialValues = {
    name: "",
    cpfOrCnpj: "",
    isCnpj: false,
  };

  const mockOnCancel = jest.fn();
  const mockOnSubmit = jest.fn();

  it("deve renderizar os campos corretamente", () => {
    render(
      <ProducerEditForm
        initialValues={mockInitialValues}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByLabelText("Nome:")).toBeInTheDocument();
    expect(screen.getByLabelText("CPF")).toBeInTheDocument();
    expect(screen.getByText("É CNPJ?")).toBeInTheDocument();
    expect(screen.getByText("Salvar")).toBeInTheDocument();
    expect(screen.getByText("Cancelar")).toBeInTheDocument();
  });

  it("deve alternar entre CPF e CNPJ ao clicar no checkbox", async () => {
    render(
      <ProducerEditForm
        initialValues={mockInitialValues}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByLabelText("CPF")).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText("É CNPJ?"));
    });

    expect(screen.getByLabelText("CNPJ")).toBeInTheDocument();
  });

  it("deve chamar a função onSubmit com os valores corretos", async () => {
    render(
      <ProducerEditForm
        initialValues={mockInitialValues}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />
    );

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Nome:"), {
        target: { value: "João da Silva" },
      });
      fireEvent.change(screen.getByLabelText("CPF"), {
        target: { value: "123.456.789-00" },
      });
      fireEvent.click(screen.getByText("Salvar"));
    });

    await waitFor(() => expect(mockOnSubmit).toHaveBeenCalledTimes(1));

    const submittedData = mockOnSubmit.mock.calls[0][0];

    expect(submittedData).toEqual({
      name: "João da Silva",
      cpfOrCnpj: "123.456.789-00",
    });
  });

  it("deve chamar a função onCancel ao clicar no botão cancelar", async () => {
    render(
      <ProducerEditForm
        initialValues={mockInitialValues}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />
    );

    await act(async () => {
      fireEvent.click(screen.getByText("Cancelar"));
    });

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
  });
});
