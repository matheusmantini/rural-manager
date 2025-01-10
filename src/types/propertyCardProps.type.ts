import { iProperty } from "./property.type";

export interface iPropertyCard {
  property: iProperty;
  onEdit: (propertyID: number) => void;
  onDelete: (property: number) => void;
}
