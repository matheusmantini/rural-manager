import { Formik, Form, Field } from "formik";
import InputMask from "react-input-mask";
import CustomButton from "../../atoms/button";
import FormikErrorMessage from "../../molecules/formikErrorMessage";
import addProducerValidationSchema from "../../../validations/addProducerValidationSchema";
import {
  ButtonContainer,
  Checkbox,
  ModalContent,
  ModalOverlay,
} from "./modalAddProducer.style";

const ModalAddProducer = ({ onClose, onSubmit }: any) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Adicionar Novo Produtor</h3>
        <Formik
          initialValues={{
            id: 0,
            name: "",
            cpfOrCnpj: "",
            properties: [],
            isCnpj: false,
          }}
          validationSchema={addProducerValidationSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ values, setFieldValue, touched, errors }) => (
            <Form>
              <label>
                Nome:
                <Field
                  type="text"
                  name="name"
                  className={touched.name && errors.name ? "error" : ""}
                />
                <FormikErrorMessage name="name" />
              </label>
              <label>
                CPF / CNPJ:
                <Field name="cpfOrCnpj">
                  {({ field }: any) => (
                    <InputMask
                      {...field}
                      mask={
                        values.isCnpj ? "99.999.999/9999-99" : "999.999.999-99"
                      }
                      maskChar="_"
                      className={
                        touched.cpfOrCnpj && errors.cpfOrCnpj ? "error" : ""
                      }
                      onChange={(e) =>
                        setFieldValue("cpfOrCnpj", e.target.value)
                      }
                    />
                  )}
                </Field>
                <FormikErrorMessage name="cpfOrCnpj" />
              </label>
              <Checkbox>
                <input
                  type="checkbox"
                  checked={values.isCnpj}
                  onChange={() => setFieldValue("isCnpj", !values.isCnpj)}
                />
                <span>É CNPJ?</span>
              </Checkbox>
              <ButtonContainer>
                <CustomButton variant="primary">Adicionar</CustomButton>
                <CustomButton variant="danger" onClick={onClose}>
                  Cancelar
                </CustomButton>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAddProducer;
