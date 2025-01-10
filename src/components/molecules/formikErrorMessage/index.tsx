import { ErrorMessage } from "formik";
import { StyledErrorMessage } from "./formikErrorMessage.style";

const FormikErrorMessage = ({ name }: { name: string }) => (
  <div role="alert">
    <ErrorMessage name={name}>
      {(msg) => <StyledErrorMessage>{msg}</StyledErrorMessage>}
    </ErrorMessage>
  </div>
);

export default FormikErrorMessage;
