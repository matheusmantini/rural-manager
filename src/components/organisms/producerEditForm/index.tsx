import { Formik, Field, Form, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import {
  Checkbox,
  FormWrapper,
  EditFormActions,
  EditFormContent,
  ProducerCard,
} from "../../../pages/producerDetailsPage/producerDetailsPage.style";
import CustomButton from "../../atoms/button";
import producerEditFormValidationSchema from "../../../validations/producerEditFormValidationSchema";
import { iProducerEditFormProps } from "../../../types/producerEditFormProps.types";

const ProducerEditForm: React.FC<iProducerEditFormProps> = ({
  initialValues,
  onCancel,
  onSubmit,
}) => {
  return (
    <ProducerCard>
      <Formik
        initialValues={initialValues}
        validationSchema={producerEditFormValidationSchema}
        onSubmit={(values) => {
          onSubmit({
            name: values.name,
            cpfOrCnpj: values.cpfOrCnpj,
          });
        }}
      >
        {({ touched, errors, values, setFieldValue }) => (
          <FormWrapper>
            <Form>
              <EditFormContent>
                <label>
                  Nome:
                  <Field
                    type="text"
                    name="name"
                    className={touched.name && errors.name ? "error" : ""}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </label>

                <Checkbox>
                  <Field
                    type="checkbox"
                    name="isCnpj"
                    checked={values.isCnpj}
                    onChange={() => setFieldValue("isCnpj", !values.isCnpj)}
                  />
                  <span>É CNPJ?</span>
                </Checkbox>

                <label>
                  {values.isCnpj ? "CNPJ" : "CPF"}
                  <Field name="cpfOrCnpj">
                    {({ field }: any) => (
                      <InputMask
                        {...field}
                        mask={
                          values.isCnpj
                            ? "99.999.999/9999-99"
                            : "999.999.999-99"
                        }
                        maskChar={"_"}
                        onChange={(e) =>
                          setFieldValue("cpfOrCnpj", e.target.value)
                        }
                        className={
                          touched.cpfOrCnpj && errors.cpfOrCnpj ? "error" : ""
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="cpfOrCnpj"
                    component="div"
                    className="error-message"
                  />
                </label>
              </EditFormContent>

              <EditFormActions>
                <CustomButton variant="success" type="submit">
                  Salvar
                </CustomButton>
                <CustomButton variant="danger" onClick={onCancel}>
                  Cancelar
                </CustomButton>
              </EditFormActions>
            </Form>
          </FormWrapper>
        )}
      </Formik>
    </ProducerCard>
  );
};

export default ProducerEditForm;
