
interface LandUsage {
  agricultural: number;
  vegetation: number;
}

export interface iAggregateData {
  totalFarms: number;
  totalArea: number;
  landUsage: LandUsage;
  byState: Record<string, number>;
  byCulture: Record<string, number>;
}