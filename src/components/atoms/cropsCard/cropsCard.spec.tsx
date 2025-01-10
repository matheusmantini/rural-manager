import { render, screen, fireEvent } from "@testing-library/react";
import CropsCard from ".";

describe("CropsCard", () => {
  const crop = {
    id: 1,
    season: "2024",
    culture: "Milho",
  };

  it("deve renderizar as informações da cultura corretamente", () => {
    render(<CropsCard crop={crop} onEdit={() => {}} onDelete={() => {}} />);

    expect(screen.getByText(/Ano da Safra:/)).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();

    expect(screen.getByText(/Cultura:/)).toBeInTheDocument();
    expect(screen.getByText("Milho")).toBeInTheDocument();
  });

  it("deve chamar a função onEdit quando o botão 'Editar' for clicado", () => {
    const onEditMock = jest.fn();
    render(<CropsCard crop={crop} onEdit={onEditMock} onDelete={() => {}} />);

    const editButton = screen.getByRole("button", { name: /Editar/ });
    fireEvent.click(editButton);

    expect(onEditMock).toHaveBeenCalledTimes(1);
    expect(onEditMock).toHaveBeenCalledWith(crop);
  });

  it("deve chamar a função onDelete quando o botão 'Excluir' for clicado", () => {
    const onDeleteMock = jest.fn();
    render(<CropsCard crop={crop} onEdit={() => {}} onDelete={onDeleteMock} />);

    const deleteButton = screen.getByRole("button", { name: /Excluir/ });
    fireEvent.click(deleteButton);

    expect(onDeleteMock).toHaveBeenCalledTimes(1);
    expect(onDeleteMock).toHaveBeenCalledWith(crop);
  });
});
