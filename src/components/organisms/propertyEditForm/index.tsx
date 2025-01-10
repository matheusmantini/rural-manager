import { useState } from "react";
import { Formik, Field, Form } from "formik";
import {
  CropsLabel,
  CropsWrapper,
  CropActions,
  EditCropContainer,
  FormWrapper,
  EditFormActions,
  PropertyFormContainer,
  FormContent,
  DividerLine,
  CropsContainer,
} from "../../../pages/producerDetailsPage/producerDetailsPage.style";
import CustomButton from "../../atoms/button";
import CropsCard from "../../atoms/cropsCard";
import propertyEditFormValidationSchema from "../../../validations/propertyEditFormValidationSchema";
import FormikErrorMessage from "../../molecules/formikErrorMessage";

const PropertyEditForm = ({
  initialValues,
  onCancel,
  onSubmit,
}: {
  initialValues: any;
  onCancel: () => void;
  onSubmit: (values: any) => void;
}) => {
  const [editingCrop, setEditingCrop] = useState<any | null>(null);
  const [addingCrop, setAddingCrop] = useState<boolean>(false);

  const handleAddCrop = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddingCrop(true);
  };

  const handleDeleteCrop = (index: number, values: any, setFieldValue: any) => {
    const updatedCrops = values.crops.filter(
      (_: any, i: number) => i !== index
    );
    setFieldValue("crops", updatedCrops);
  };

  const handleEditCrop = (crop: any) => {
    setEditingCrop(crop);
  };

  const handleUpdateCrop = (values: any, setFieldValue: any) => {
    const updatedCrops = values.crops.map((crop: any) =>
      crop.id === editingCrop.id ? editingCrop : crop
    );
    setFieldValue("crops", updatedCrops);
    setEditingCrop(null);
  };

  const handleAddCropToList = (values: any, setFieldValue: any) => {
    const maxId = values.crops.reduce((max: number, crop: any) => {
      return crop.id > max ? crop.id : max;
    }, 0);

    const newCrop = {
      ...editingCrop,
      id: maxId + 1,
    };

    const updatedCrops = [...values.crops, newCrop];
    setFieldValue("crops", updatedCrops);
    setAddingCrop(false);
    setEditingCrop(null);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={propertyEditFormValidationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validate={(values) => {
        const errors: any = {};

        if (values.totalArea <= 0) {
          errors.totalArea = "A área total deve ser maior que zero.";
        }

        if (
          values.totalArea <
          values.agriculturalArea + values.vegetationArea
        ) {
          errors.totalArea =
            "A área total deve ser maior ou igual à soma das áreas agrícola e de vegetação.";
        }

        return errors;
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <PropertyFormContainer>
            <h2>Editando propriedade</h2>
            <FormWrapper>
              <FormContent>
                <div>
                  <label htmlFor="name">Nome da Propriedade</label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nome da Propriedade"
                  />
                  <FormikErrorMessage name="name" />
                </div>

                <div>
                  <label htmlFor="city">Cidade</label>
                  <Field
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Cidade"
                  />
                  <FormikErrorMessage name="city" />
                </div>

                <div>
                  <label htmlFor="state">Estado</label>
                  <Field
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Estado"
                  />
                  <FormikErrorMessage name="state" />
                </div>

                <div>
                  <label htmlFor="totalArea">Área Total (ha)</label>
                  <Field
                    id="totalArea"
                    name="totalArea"
                    type="number"
                    min="0"
                    placeholder="Área Total"
                  />
                  <FormikErrorMessage name="totalArea" />
                </div>

                <div>
                  <label htmlFor="agriculturalArea">Área Agrícola (ha)</label>
                  <Field
                    id="agriculturalArea"
                    name="agriculturalArea"
                    type="number"
                    placeholder="Área Agrícola"
                  />
                  <FormikErrorMessage name="agriculturalArea" />
                </div>

                <div>
                  <label htmlFor="vegetationArea">Área de Vegetação (ha)</label>
                  <Field
                    id="vegetationArea"
                    name="vegetationArea"
                    type="number"
                    placeholder="Área de Vegetação"
                  />
                  <FormikErrorMessage name="vegetationArea" />
                </div>
              </FormContent>

              <CropsContainer>
                <CropsLabel>
                  <label>Culturas</label>
                  <CustomButton variant="primary" onClick={handleAddCrop}>
                    Adicionar Cultura
                  </CustomButton>
                </CropsLabel>

                {!editingCrop && !addingCrop && (
                  <CropsWrapper>
                    {values.crops.map((crop: any, index: number) => (
                      <CropsCard
                        key={index}
                        crop={crop}
                        onEdit={handleEditCrop}
                        onDelete={() =>
                          handleDeleteCrop(index, values, setFieldValue)
                        }
                      />
                    ))}
                  </CropsWrapper>
                )}

                {editingCrop && !addingCrop && (
                  <EditCropContainer>
                    <h3>Editar Cultura</h3>
                    <FormContent>
                      <div>
                        <label htmlFor="season">Ano da Safra</label>
                        <Field
                          id="season"
                          name="season"
                          type="text"
                          value={editingCrop.season}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            const value = e.target.value;
                            if (/^\d{0,4}$/.test(value)) {
                              setEditingCrop({
                                ...editingCrop,
                                season: value,
                              });
                            }
                          }}
                        />
                        <FormikErrorMessage name="season" />
                      </div>

                      <div>
                        <label htmlFor="culture">Cultura</label>
                        <Field
                          id="culture"
                          name="culture"
                          type="text"
                          maxLength="35"
                          value={editingCrop.culture}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEditingCrop({
                              ...editingCrop,
                              culture: e.target.value,
                            })
                          }
                        />
                        <FormikErrorMessage name="culture" />
                      </div>

                      <CropActions>
                        <CustomButton
                          variant="success"
                          onClick={() =>
                            handleUpdateCrop(values, setFieldValue)
                          }
                        >
                          Atualizar Cultura
                        </CustomButton>
                        <CustomButton
                          variant="danger"
                          onClick={() => setEditingCrop(null)}
                        >
                          Cancelar
                        </CustomButton>
                      </CropActions>
                    </FormContent>
                  </EditCropContainer>
                )}

                {addingCrop && (
                  <div>
                    <h3>Adicionar Nova Cultura</h3>
                    <FormContent>
                      <div>
                        <label htmlFor="season">Ano da Safra</label>
                        <Field
                          id="season"
                          name="season"
                          type="text"
                          value={editingCrop?.season || ""}
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            const value = e.target.value;
                            if (/^\d{0,4}$/.test(value)) {
                              setEditingCrop({
                                ...editingCrop,
                                season: value,
                              });
                            }
                          }}
                        />
                        <FormikErrorMessage name="season" />
                      </div>

                      <div>
                        <label htmlFor="culture">Cultura</label>
                        <Field
                          id="culture"
                          name="culture"
                          type="text"
                          maxLength="35"
                          value={editingCrop?.culture || ""}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEditingCrop({
                              ...editingCrop,
                              culture: e.target.value,
                            })
                          }
                        />
                        <FormikErrorMessage name="culture" />
                      </div>

                      <CropActions>
                        <CustomButton
                          variant="success"
                          onClick={() =>
                            handleAddCropToList(values, setFieldValue)
                          }
                        >
                          Adicionar
                        </CustomButton>
                        <CustomButton
                          variant="danger"
                          onClick={() => {
                            setAddingCrop(false);
                            setEditingCrop(null);
                          }}
                        >
                          Cancelar
                        </CustomButton>
                      </CropActions>
                    </FormContent>
                  </div>
                )}
              </CropsContainer>
            </FormWrapper>
            <DividerLine />
            <EditFormActions>
              <CustomButton variant="success" type="submit">
                Salvar
              </CustomButton>
              <CustomButton variant="danger" onClick={onCancel}>
                Cancelar
              </CustomButton>
            </EditFormActions>
          </PropertyFormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyEditForm;
