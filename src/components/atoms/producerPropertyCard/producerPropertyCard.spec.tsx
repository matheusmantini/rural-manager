import { render, screen, fireEvent, act } from "@testing-library/react";
import PropertyCard from ".";

const mockProperty = {
  id: 1,
  name: "Fazenda Primavera",
  city: "Ribeirão Preto",
  state: "SP",
  totalArea: 100,
  agriculturalArea: 60,
  vegetationArea: 40,
  crops: [
    { id: 1, culture: "Soja", season: "2023" },
    { id: 2, culture: "Milho", season: "2022" },
  ],
};

const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

describe("PropertyCard", () => {
  it("renderiza corretamente as informações da propriedade", () => {
    render(
      <PropertyCard
        property={mockProperty}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText("Fazenda Primavera")).toBeInTheDocument();

    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Ribeirão Preto`, "i"))
    ).toBeInTheDocument();
    expect(screen.getByText(/SP/i)).toBeInTheDocument();

    expect(screen.getByText(new RegExp(`Total Area`, "i"))).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();

    expect(
      screen.getByText(new RegExp(`Agricultural Area`, "i"))
    ).toBeInTheDocument();
    expect(screen.getByText(/60/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`Vegetation Area`, "i"))
    ).toBeInTheDocument();
    expect(screen.getByText(/40/i)).toBeInTheDocument();
  });

  it("renderiza as culturas cadastradas corretamente", () => {
    render(
      <PropertyCard
        property={mockProperty}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText("Culturas")).toBeInTheDocument();

    expect(screen.getByText(/Soja/i)).toBeInTheDocument();
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
    expect(screen.getByText(/Milho/i)).toBeInTheDocument();
    expect(screen.getByText(/2022/i)).toBeInTheDocument();
  });

  it("exibe mensagem quando nenhuma cultura está cadastrada", () => {
    const propertyWithoutCrops = { ...mockProperty, crops: [] };

    render(
      <PropertyCard
        property={propertyWithoutCrops}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText("Nenhuma cultura cadastrada.")).toBeInTheDocument();
  });

  it("aciona a função de edição ao clicar no botão Editar", async() => {
    render(
      <PropertyCard
        property={mockProperty}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const editButton = screen.getByText("Editar");
    await act(async () => {
      fireEvent.click(editButton);
    });

    expect(mockOnEdit).toHaveBeenCalledWith(mockProperty.id);
  });

  it("aciona a função de exclusão ao clicar no botão Deletar", async() => {
    render(
      <PropertyCard
        property={mockProperty}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    const deleteButton = screen.getByText("Deletar");
    await act(async () => {
      fireEvent.click(deleteButton);
    });

    expect(mockOnDelete).toHaveBeenCalledWith(mockProperty.id);
  });
});
