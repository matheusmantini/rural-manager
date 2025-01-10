import { useState } from "react";
import { Formik, Form, Field } from "formik";
import CustomButton from "../../atoms/button";
import CropsCard from "../../atoms/cropsCard";
import { iCrop } from "../../../types";
import addPropertyValidationSchema from "../../../validations/addPropertyValidationSchema";
import {
  CropActions,
  CropsContainer,
  CropsLabel,
  CropsWrapper,
  DividerLine,
  EditCropContainer,
  EditFormActions,
  FormContent,
  FormWrapper,
  PropertyFormContainer,
} from "../../../pages/producerDetailsPage/producerDetailsPage.style";
import FormikErrorMessage from "../../molecules/formikErrorMessage";
import { ModalContent, ModalOverlay } from "./modalAddProperty.style";

const ModalAddProperty = ({ onClose, onSubmit }: any) => {
  const [addingCrop, setAddingCrop] = useState<boolean>(false);
  const [editingCrop, setEditingCrop] = useState<iCrop | null>(null);

  const handleAddCrop = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddingCrop(true);
  };

  const handleUpdateCrop = (values: any, setFieldValue: any) => {
    const updatedCrops = values.crops.map((crop: any) =>
      crop.id === editingCrop?.id ? editingCrop : crop
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
    <ModalOverlay>
      <ModalContent>
        <Formik
          initialValues={{
            name: "",
            city: "",
            state: "",
            totalArea: 0,
            agriculturalArea: 0,
            vegetationArea: 0,
            crops: [],
          }}
          validationSchema={addPropertyValidationSchema}
          validateOnBlur={true}
          validateOnChange={true}
          onSubmit={(values) => {
            onSubmit(values);
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
          {({ values, setFieldValue, touched, errors }) => (
            <Form>
              <PropertyFormContainer>
                <h2>Adicionar Propriedade</h2>
                <FormWrapper>
                  <FormContent>
                    <div>
                      <label htmlFor="name">Nome da Propriedade</label>
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        className={touched.name && errors.name ? "error" : ""}
                      />
                      <FormikErrorMessage name="name" />
                    </div>

                    <div>
                      <label htmlFor="city">Cidade</label>
                      <Field
                        id="city"
                        name="city"
                        type="text"
                        className={touched.city && errors.city ? "error" : ""}
                      />
                      <FormikErrorMessage name="city" />
                    </div>

                    <div>
                      <label htmlFor="state">Estado</label>
                      <Field
                        id="state"
                        name="state"
                        type="text"
                        className={touched.state && errors.state ? "error" : ""}
                      />
                      <FormikErrorMessage name="state" />
                    </div>

                    <div>
                      <label htmlFor="totalArea">Área Total (ha)</label>
                      <Field
                        id="totalArea"
                        name="totalArea"
                        type="number"
                        className={
                          touched.totalArea && errors.totalArea ? "error" : ""
                        }
                      />
                      <FormikErrorMessage name="totalArea" />
                    </div>

                    <div>
                      <label htmlFor="agriculturalArea">
                        Área Agrícola (ha)
                      </label>
                      <Field
                        id="agriculturalArea"
                        name="agriculturalArea"
                        type="number"
                        className={
                          touched.agriculturalArea && errors.agriculturalArea
                            ? "error"
                            : ""
                        }
                      />
                      <FormikErrorMessage name="agriculturalArea" />
                    </div>

                    <div>
                      <label htmlFor="vegetationArea">
                        Área de Vegetação (ha)
                      </label>
                      <Field
                        id="vegetationArea"
                        name="vegetationArea"
                        type="number"
                        className={
                          touched.vegetationArea && errors.vegetationArea
                            ? "error"
                            : ""
                        }
                      />
                      <FormikErrorMessage name="vegetationArea" />
                    </div>
                  </FormContent>

                  <CropsContainer>
                    <CropsLabel>
                      <label htmlFor="crops">Culturas</label>
                      <CustomButton variant="primary" onClick={handleAddCrop}>
                        Adicionar Cultura
                      </CustomButton>
                    </CropsLabel>

                    {!addingCrop && (
                      <CropsWrapper>
                        {values.crops.map((crop: any, index: number) => (
                          <CropsCard
                            key={index}
                            crop={crop}
                            onEdit={(crop: iCrop) => setEditingCrop(crop)}
                            onDelete={() =>
                              setFieldValue(
                                "crops",
                                values.crops.filter(
                                  (_: any, i: number) => i !== index
                                )
                              )
                            }
                          />
                        ))}
                      </CropsWrapper>
                    )}
                  </CropsContainer>

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
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
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
                    <EditCropContainer>
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
                                setEditingCrop((prev) => ({
                                  ...prev,
                                  season: value,
                                  id: prev?.id ?? 0,
                                  culture: prev?.culture ?? "",
                                }));
                              }
                            }}
                          />
                        </div>
                        <div>
                          <label htmlFor="culture">Cultura</label>
                          <Field
                            id="culture"
                            name="culture"
                            type="text"
                            maxLength="35"
                            value={editingCrop?.culture || ""}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const value = e.target.value;
                              setEditingCrop((prev) => {
                                return {
                                  ...prev,
                                  culture: value,
                                  id: prev?.id ?? 0,
                                  season: prev?.season ?? "",
                                };
                              });
                            }}
                          />
                        </div>

                        <CropActions>
                          <CustomButton
                            variant="success"
                            onClick={() =>
                              handleAddCropToList(values, setFieldValue)
                            }
                          >
                            Incluir
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
                    </EditCropContainer>
                  )}
                </FormWrapper>

                <DividerLine />
                <EditFormActions>
                  <CustomButton variant="success">Salvar</CustomButton>
                  <CustomButton variant="danger" onClick={onClose}>
                    Cancelar
                  </CustomButton>
                </EditFormActions>
              </PropertyFormContainer>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAddProperty;
