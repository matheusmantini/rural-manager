import React from "react";
import { iCrop } from "../../../types";
import CustomButton from "../button";
import {
  Card,
  ButtonsContainer,
  CropsItem,
  CropsList,
  CropsTitle,
  PropertyInfo,
  PropertyName,
} from "./producerPropertyCard.style";
import { iPropertyCard } from "../../../types/propertyCardProps.type";

const PropertyCard: React.FC<iPropertyCard> = ({ property, onEdit, onDelete }) => {
  const {
    name,
    city,
    state,
    totalArea,
    agriculturalArea,
    vegetationArea,
    crops,
  } = property;

  return (
    <Card>
      <span>
        <PropertyName>{name}</PropertyName>
        <PropertyInfo>
          <strong>Location:</strong> {city}, {state}
        </PropertyInfo>
        <PropertyInfo>
          <strong>Total Area:</strong> {totalArea} ha
        </PropertyInfo>
        <PropertyInfo>
          <strong>Agricultural Area:</strong> {agriculturalArea} ha
        </PropertyInfo>
        <PropertyInfo>
          <strong>Vegetation Area:</strong> {vegetationArea} ha
        </PropertyInfo>
        <CropsTitle>Culturas</CropsTitle>
        {crops && crops.length > 0 ? (
          <CropsList>
            {crops.map((crop: iCrop, index: number) => (
              <CropsItem key={index}>
                <strong>Tipo:</strong> {crop.culture} | <strong>Ano:</strong>{" "}
                {crop.season}
              </CropsItem>
            ))}
          </CropsList>
        ) : (
          <PropertyInfo>Nenhuma cultura cadastrada.</PropertyInfo>
        )}
      </span>

      <ButtonsContainer>
        <CustomButton variant={"success"} onClick={() => onEdit(property.id)}>
          Editar
        </CustomButton>
        <CustomButton variant={"danger"} onClick={() => onDelete(property.id)}>
          Deletar
        </CustomButton>
      </ButtonsContainer>
    </Card>
  );
};

export default PropertyCard;
