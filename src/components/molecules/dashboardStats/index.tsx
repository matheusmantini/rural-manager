import React from "react";
import StatCard from "../../atoms/statCard";
import { StatsContainer } from "./dashboardStats.style";
import { DashboardStatsProps } from "../../../types/dashboardStatsProps.types";

const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalFarms,
  totalArea,
}) => {
  return (
    <StatsContainer>
      <StatCard title="Total de fazendas cadastradas" value={totalFarms} />
      <StatCard title="Total de hectares registrados" value={totalArea} />
    </StatsContainer>
  );
};

export default DashboardStats;
