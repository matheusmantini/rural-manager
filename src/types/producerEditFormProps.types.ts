export interface iProducerEditFormProps {
  initialValues: {
    name: string;
    cpfOrCnpj: string;
    isCnpj: boolean;
  };
  onCancel: () => void;
  onSubmit: (values: { name: string; cpfOrCnpj: string }) => void;
}
