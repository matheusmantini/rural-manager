import { iCropsCardProps } from "../../../types/cropsCardProps.type";
import { Card } from "../statCard/statCard.style";
import {
  ButtonsContainer,
  CropInfo,
  DeleteButton,
  EditButton,
} from "./cropsCard.style";

const CropsCard: React.FC<iCropsCardProps> = ({ crop, onEdit, onDelete }) => {
  return (
    <Card>
      <CropInfo>
        <strong>Ano da Safra:</strong> {crop.season}
      </CropInfo>
      <CropInfo>
        <strong>Cultura:</strong> {crop.culture}
      </CropInfo>
      <ButtonsContainer>
        <EditButton
          onClick={(e) => {
            e.preventDefault();
            onEdit(crop);
          }}
        >
          Editar
        </EditButton>
        <DeleteButton
          onClick={(e) => {
            e.preventDefault();
            onDelete(crop);
          }}
        >
          Excluir
        </DeleteButton>
      </ButtonsContainer>
    </Card>
  );
};

export default CropsCard;
