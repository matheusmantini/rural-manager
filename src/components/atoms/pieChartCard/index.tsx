import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card } from "../statCard/statCard.style";
import { COLORS } from "../../../utils/graphColors";
import { IPieChartCardProps } from "../../../types";
import { PieChartTitle } from "./pieChartCard.style";

const PieChartCard: React.FC<IPieChartCardProps> = ({ title, data }) => {
  return (
    <Card>
      <PieChartTitle>{title}</PieChartTitle>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              data-testid={`pie-segment-${index}`}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Card>
  );
};

export default PieChartCard;
