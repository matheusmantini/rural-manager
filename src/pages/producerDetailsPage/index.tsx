import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import {
  addProperty,
  deleteProducer,
  deleteProperty,
  updateProducer,
  updateProperty,
} from "../../redux/features/Producer";
import { useState } from "react";
import PropertyCard from "../../components/atoms/producerPropertyCard";
import {
  ActionContainer,
  ActionsContainer,
  Container,
  DeleteButton,
  EditButton,
  ProducerCard,
  ProducerTitle,
  PropertiesContainer,
} from "./producerDetailsPage.style";
import ProducerEditForm from "../../components/organisms/producerEditForm";
import PropertyEditForm from "../../components/organisms/propertyEditForm";
import CustomButton from "../../components/atoms/button";
import ModalAddProperty from "../../components/organisms/modalAddProperty";
import { iProperty } from "../../types";
import { toast } from "react-toastify";

function DetailedProducerPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const producers = useSelector((state: RootState) => state.producers.value);

  const selectedProducer = producers.find(
    (producer) => String(producer.id) === id
  );

  const [isEditingProducer, setIsEditingProducer] = useState(false);
  const [isEditingProperty, setIsEditingProperty] = useState<number | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!selectedProducer) {
    return <p>Erro 404. Produtor não encontrado</p>;
  }

  const handleDeleteProducer = () => {
    dispatch(deleteProducer({ id: selectedProducer.id }));
    navigate("/produtor");
  };

  const handleUpdateProducer = (values: {
    name: string;
    cpfOrCnpj: string;
  }) => {
    dispatch(updateProducer({ ...selectedProducer, ...values }));
    setIsEditingProducer(false);
  };

  const handleUpdateProperty = (propertyId: number, values: any) => {
    dispatch(
      updateProperty({
        producerId: selectedProducer.id,
        propertyId,
        updatedProperty: values,
      })
    );
    setIsEditingProperty(null);
  };
  return (
    <Container>
      <ProducerCard>
        <ProducerTitle>Produtor: {selectedProducer.name}</ProducerTitle>
        <ActionsContainer>
          <EditButton onClick={() => setIsEditingProducer(true)}>
            Editar
          </EditButton>
          <DeleteButton onClick={handleDeleteProducer}>Deletar</DeleteButton>
        </ActionsContainer>
      </ProducerCard>

      {isModalOpen && (
        <ModalAddProperty
          producerId={selectedProducer.id}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(values: iProperty) => {
            dispatch(
              addProperty({ property: values, producerId: selectedProducer.id })
            );
            toast.success("Propriedade adicionada com sucesso!");
            setIsModalOpen(false);
          }}
        />
      )}

      {isEditingProducer && (
        <ProducerEditForm
          initialValues={{
            name: selectedProducer.name,
            cpfOrCnpj: selectedProducer.cpfOrCnpj,
            isCnpj: selectedProducer.cpfOrCnpj.length > 14,
          }}
          onCancel={() => setIsEditingProducer(false)}
          onSubmit={handleUpdateProducer}
        />
      )}

      <ActionContainer>
        <CustomButton variant="primary" onClick={() => setIsModalOpen(true)}>
          Adicionar nova propriedade
        </CustomButton>
      </ActionContainer>

      {selectedProducer.properties.length > 0 ? (
        <PropertiesContainer
          className={isEditingProperty !== null ? "editing" : ""}
        >
          {selectedProducer.properties
            .filter(
              (property) =>
                property.id === isEditingProperty || isEditingProperty === null
            )
            .map((property) => (
              <div
                key={property.id + Number(selectedProducer.id)}
                style={{
                  gridColumn:
                    isEditingProperty === property.id ? "1 / -1" : "auto",
                }}
              >
                {isEditingProperty === property.id ? (
                  <PropertyEditForm
                    initialValues={{
                      ...property,
                    }}
                    onCancel={() => setIsEditingProperty(null)}
                    onSubmit={(values) =>
                      handleUpdateProperty(property.id, values)
                    }
                  />
                ) : (
                  <PropertyCard
                    property={property}
                    onEdit={() => setIsEditingProperty(property.id)}
                    onDelete={() =>
                      dispatch(
                        deleteProperty({
                          producerId: selectedProducer.id,
                          propertyId: property.id,
                        })
                      )
                    }
                  />
                )}
              </div>
            ))}
        </PropertiesContainer>
      ) : (
        <p>Não há propriedades cadastradas!</p>
      )}
    </Container>
  );
}

export default DetailedProducerPage;
