import React from "react";
import PieChartCard from "../../atoms/pieChartCard";
import { ChartsContainer } from "./dashboardPieCharts.style";
import { DashboardPieChartsProps } from "../../../types/dashboardPieChartsProps.types";

const DashboardPieCharts: React.FC<DashboardPieChartsProps> = ({
  stateData,
  cultureData,
  landUsageData,
}) => {
  return (
    <ChartsContainer>
      <PieChartCard title="Propriedades por Estado" data={stateData} />
      <PieChartCard title="Culturas por Tipo" data={cultureData} />
      <PieChartCard title="Uso do Solo" data={landUsageData} />
    </ChartsContainer>
  );
};

export default DashboardPieCharts;
