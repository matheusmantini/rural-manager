import { iProperty } from "./property.type";

export interface iProducer {
  id: number;
  cpfOrCnpj: string;
  name: string;
  properties: iProperty[];
}

export interface iProducerState {
  value: iProducer[];
}