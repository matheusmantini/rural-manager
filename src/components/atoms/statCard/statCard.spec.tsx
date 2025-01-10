import { render, screen } from "@testing-library/react";
import StatCard from ".";

describe("StatCard", () => {
  it("renderiza o título corretamente", () => {
    render(<StatCard title="Total de Usuários" value={500} />);
    expect(screen.getByText("Total de Usuários")).toBeInTheDocument();
  });

  it("renderiza o valor corretamente", () => {
    render(<StatCard title="Total de Vendas" value={1200} />);
    expect(screen.getByText("1200")).toBeInTheDocument();
  });

  it("não renderiza elementos adicionais desnecessários", () => {
    render(<StatCard title="Total de Produtos" value={300} />);
    expect(screen.queryByText("Outros")).not.toBeInTheDocument();
  });
});
