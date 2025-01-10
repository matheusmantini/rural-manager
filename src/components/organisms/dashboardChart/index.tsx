import React from "react";
import { useSelector } from "react-redux";
import DashboardStats from "../../molecules/dashboardStats";
import DashboardPieCharts from "../../molecules/dashboardPieCharts";
import { RootState } from "../../../redux/store";
import { aggregateData } from "../../../utils/aggregateData";
import { Container } from "./dashboardChart.style";

const Dashboard: React.FC = () => {
  const producers = useSelector((state: RootState) => state.producers.value);
  const { totalFarms, totalArea, landUsage, byState, byCulture } =
    aggregateData(producers);

  const stateData = Object.entries(byState).map(([state, count]) => ({
    name: state,
    value: count as number,
  }));

  const cultureData = Object.entries(byCulture).map(([culture, count]) => ({
    name: culture,
    value: count as number,
  }));

  const landUsageData = [
    { name: "Agricultável", value: landUsage.agricultural },
    { name: "Vegetação", value: landUsage.vegetation },
  ];

  return (
    <Container>
      <DashboardStats totalFarms={totalFarms} totalArea={totalArea} />
      <DashboardPieCharts
        stateData={stateData}
        cultureData={cultureData}
        landUsageData={landUsageData}
      />
    </Container>
  );
};

export default Dashboard;
