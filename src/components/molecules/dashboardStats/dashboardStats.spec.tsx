import { render, screen } from "@testing-library/react";
import DashboardStats from ".";

describe("DashboardStats", () => {
  test("renderiza o cartão com o total de fazendas corretamente", () => {
    render(<DashboardStats totalFarms={10} totalArea={500} />);
    expect(
      screen.getByText("Total de fazendas cadastradas")
    ).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("renderiza o cartão com o total de hectares corretamente", () => {
    render(<DashboardStats totalFarms={10} totalArea={500} />);
    expect(
      screen.getByText("Total de hectares registrados")
    ).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
  });
});
