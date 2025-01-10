import { iCrop } from "./crop.type";

export interface iProperty {
  id: number;
  name: string;
  city: string;
  state: string;
  totalArea: number | string;
  agriculturalArea: number | string;
  vegetationArea: number | string;
  crops: iCrop[];
}

export interface iPropertyState {
  value: iProperty[];
}
