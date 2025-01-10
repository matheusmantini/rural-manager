import { render, screen } from "@testing-library/react";
import DashboardPieCharts from ".";

const mockStateData = [
  { name: "Estado A", value: 5 },
  { name: "Estado B", value: 10 },
];

const mockCultureData = [
  { name: "Cultura X", value: 7 },
  { name: "Cultura Y", value: 3 },
];

const mockLandUsageData = [
  { name: "Agrícola", value: 20 },
  { name: "Vegetação", value: 15 },
];

describe("DashboardPieCharts", () => {
  it("renderiza o gráfico de propriedades por estado corretamente", () => {
    render(
      <DashboardPieCharts
        stateData={mockStateData}
        cultureData={mockCultureData}
        landUsageData={mockLandUsageData}
      />
    );
    expect(screen.getByText("Propriedades por Estado")).toBeInTheDocument();
    mockStateData.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("renderiza o gráfico de culturas por tipo corretamente", () => {
    render(
      <DashboardPieCharts
        stateData={mockStateData}
        cultureData={mockCultureData}
        landUsageData={mockLandUsageData}
      />
    );
    expect(screen.getByText("Culturas por Tipo")).toBeInTheDocument();
    mockCultureData.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("renderiza o gráfico de uso do solo corretamente", () => {
    render(
      <DashboardPieCharts
        stateData={mockStateData}
        cultureData={mockCultureData}
        landUsageData={mockLandUsageData}
      />
    );
    expect(screen.getByText("Uso do Solo")).toBeInTheDocument();
    mockLandUsageData.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
