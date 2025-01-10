import React from "react";
import { Card, TotalText } from "./statCard.style";
import { StatCardProps } from "../../../types/statCardProps.type";

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <TotalText>{value}</TotalText>
    </Card>
  );
};

export default StatCard;
