import * as Yup from "yup";

const addProducerValidationSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  cpfOrCnpj: Yup.string()
    .required("CPF ou CNPJ é obrigatório")
    .test("valid-cpf-cnpj", "Dado inválido", (value, context) => {
      const { isCnpj } = context.parent;
      if (isCnpj) {
        return value?.replace(/[^\d]+/g, "").length === 14;
      } else {
        return value?.replace(/[^\d]+/g, "").length === 11;
      }
    }),
});

export default addProducerValidationSchema;
