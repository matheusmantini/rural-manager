export interface iCrop {
  id: number;
  season: string;
  culture: string;
}

export interface iCropState {
  value: iCrop[];
}
