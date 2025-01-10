import * as Yup from "yup";

const addPropertyValidationSchema = Yup.object({
  name: Yup.string().required("Nome da propriedade é obrigatório"),
  city: Yup.string().required("Cidade é obrigatória"),
  state: Yup.string().required("Estado é obrigatório"),
  totalArea: Yup.number()
    .required("Área total é obrigatória")
    .min(1, "Área total deve ser maior que 0"),
  agriculturalArea: Yup.number()
    .required("Área agrícola é obrigatória")
    .min(0, "Área agrícola não pode ser negativa")
    .test(
      "maxTotalArea",
      "Área agrícola não pode ser maior que a área total",
      function (value) {
        return value <= this.parent.totalArea;
      }
    ),
  vegetationArea: Yup.number()
    .required("Área de vegetação é obrigatória")
    .min(0, "Área de vegetação não pode ser negativa")
    .test(
      "maxTotalArea",
      "Área de vegetação não pode ser maior que a área total",
      function (value) {
        return value <= this.parent.totalArea;
      }
    ),
  crops: Yup.array().of(
    Yup.object({
      season: Yup.string().required("Temporada é obrigatória"),
      culture: Yup.string().required("Cultura é obrigatória"),
    })
  ),
});

export default addPropertyValidationSchema;
