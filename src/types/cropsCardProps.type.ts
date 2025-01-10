import { iCrop } from "./crop.type";

export interface iCropsCardProps {
  crop: iCrop;
  onEdit: (crop: iCrop) => void; 
  onDelete: (crop: iCrop) => void;
}
