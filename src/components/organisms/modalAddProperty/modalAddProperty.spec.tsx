import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ModalAddProperty from ".";

const mockOnClose = jest.fn();
const mockOnSubmit = jest.fn();

describe("ModalAddProperty", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o formulário com os campos corretos", () => {
    render(<ModalAddProperty onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    expect(screen.getByLabelText(/Nome da Propriedade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Estado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Área Total \(ha\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Área Agrícola \(ha\)/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Área de Vegetação \(ha\)/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Adicionar Cultura/i)).toBeInTheDocument();
  });

  it("deve exibir um erro quando o valor da área total for menor que a soma das áreas agrícola e de vegetação", async () => {
    render(<ModalAddProperty onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByLabelText(/Área Total/i), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText(/Área Agrícola/i), {
      target: { value: "6" },
    });
    fireEvent.change(screen.getByLabelText(/Área de Vegetação/i), {
      target: { value: "5" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Salvar/i }));

    await waitFor(() =>
      expect(
        screen.getByText((content) =>
          content.includes(
            "A área total deve ser maior ou igual à soma das áreas agrícola e de vegetação."
          )
        )
      ).toBeInTheDocument()
    );
  });

  it("deve adicionar uma cultura à lista ao clicar no botão 'Adicionar Cultura'", async () => {
    render(<ModalAddProperty onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    const addCropButton = screen.getByRole("button", {
      name: /Adicionar Cultura/i,
    });
    fireEvent.click(addCropButton);

    expect(screen.getByText(/Adicionar Nova Cultura/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ano da Safra/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cultura/i)).toBeInTheDocument();
  });

  it("deve adicionar uma nova cultura à lista após preencher e submeter o formulário", async () => {
    render(<ModalAddProperty onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: /Adicionar Cultura/i }));

    fireEvent.change(screen.getByLabelText(/Ano da Safra/i), {
      target: { value: "2025" },
    });
    fireEvent.change(screen.getByLabelText(/Cultura/i), {
      target: { value: "Soja" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Incluir/i }));

    await waitFor(() => {
      expect(
        screen.getByText((content) => content.includes("Soja"))
      ).toBeInTheDocument();
    });
  });

  it("deve permitir editar uma cultura na lista", async () => {
    render(<ModalAddProperty onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: /Adicionar Cultura/i }));
    fireEvent.change(screen.getByLabelText(/Ano da Safra/i), {
      target: { value: "2025" },
    });
    fireEvent.change(screen.getByLabelText(/Cultura/i), {
      target: { value: "Soja" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Incluir/i }));

    const editButton = screen.getByRole("button", { name: /Editar/i });
    fireEvent.click(editButton);

    fireEvent.change(screen.getByLabelText(/Cultura/i), {
      target: { value: "Milho" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Atualizar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Milho/i)).toBeInTheDocument();
    });
  });
});
