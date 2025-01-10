import { iProducer } from "../types";
import { iAggregateData } from "../types/aggregateData.type";

export const aggregateData = (producers: iProducer[]): iAggregateData => {
  const totalFarms = producers.reduce(
    (sum, producer) => sum + producer.properties.length,
    0
  );

  const totalArea = producers.reduce(
    (sum, producer) =>
      sum +
      producer.properties.reduce(
        (pSum, property) => pSum + Number(property.totalArea),
        0
      ),
    0
  );

  const landUsage = producers.reduce(
    (usage, producer) => {
      producer.properties.forEach((property) => {
        usage.agricultural += Number(property.agriculturalArea);
        usage.vegetation += Number(property.vegetationArea);
      });
      return usage;
    },
    { agricultural: 0, vegetation: 0 }
  );

  const byState = producers.reduce((states, producer) => {
    producer.properties.forEach((property) => {
      states[property.state] = (states[property.state] || 0) + 1;
    });
    return states;
  }, {} as Record<string, number>);

  const byCulture = producers.reduce((cultures, producer) => {
    producer.properties.forEach((property) => {
      property.crops.forEach((crop) => {
        cultures[crop.culture] = (cultures[crop.culture] || 0) + 1;
      });
    });
    return cultures;
  }, {} as Record<string, number>);

  return { totalFarms, totalArea, landUsage, byState, byCulture };
};
