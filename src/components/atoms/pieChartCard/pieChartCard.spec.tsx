import { render, screen } from "@testing-library/react";
import PieChartCard from ".";
import { COLORS } from "../../../utils/graphColors";

const mockData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

describe("PieChartCard", () => {
  it("renderiza o título corretamente", () => {
    render(<PieChartCard title="Gráfico de Teste" data={mockData} />);
    expect(screen.getByText("Gráfico de Teste")).toBeInTheDocument();
  });

  it("renderiza o número correto de segmentos do gráfico", () => {
    render(<PieChartCard title="Gráfico de Teste" data={mockData} />);
    const paths = document.querySelectorAll("path[fill]");
    expect(paths).toHaveLength(mockData.length);
  });

  it("aplica as cores corretas aos segmentos do gráfico", () => {
    render(<PieChartCard title="Gráfico de Teste" data={mockData} />);
    const paths = document.querySelectorAll("path[fill]");
    paths.forEach((path, index) => {
      expect(path.getAttribute("fill")).toBe(COLORS[index % COLORS.length]);
    });
  });

  it("renderiza a legenda corretamente", () => {
    render(<PieChartCard title="Gráfico de Teste" data={mockData} />);
    mockData.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
