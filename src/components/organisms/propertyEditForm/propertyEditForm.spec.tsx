import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import PropertyEditForm from ".";
import { Formik } from "formik";

describe("Formulário de Edição de Propriedade", () => {
  const initialValues = {
    name: "",
    city: "",
    state: "",
    totalArea: 100,
    agriculturalArea: 50,
    vegetationArea: 30,
    crops: [],
  };

  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  it("deve exibir campos iniciais corretamente", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockOnSubmit}>
        <PropertyEditForm
          initialValues={initialValues}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </Formik>
    );

    expect(screen.getByLabelText("Nome da Propriedade")).toBeInTheDocument();
    expect(screen.getByLabelText("Cidade")).toBeInTheDocument();
    expect(screen.getByLabelText("Estado")).toBeInTheDocument();
    expect(screen.getByLabelText("Área Total (ha)")).toBeInTheDocument();
    expect(screen.getByLabelText("Área Agrícola (ha)")).toBeInTheDocument();
    expect(screen.getByLabelText("Área de Vegetação (ha)")).toBeInTheDocument();
  });

  it("Formulário de Edição de Propriedade > deve exibir um erro se a área total for menor ou igual a zero", async () => {
    const initialValues = {
      name: "",
      city: "",
      state: "",
      totalArea: -1,
      agriculturalArea: 50,
      vegetationArea: 30,
      crops: [],
    };

    render(
      <Formik initialValues={initialValues} onSubmit={mockOnSubmit}>
        <PropertyEditForm
          initialValues={initialValues}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </Formik>
    );

    const totalAreaInput = screen.getByLabelText(/Área Total/i);
    const agriculturalAreaInput = screen.getByLabelText(/Área Agrícola /i);
    const vegetationAreaInput = screen.getByLabelText(/Área de Vegetação/i);

    fireEvent.change(totalAreaInput, { target: { value: 0 } });
    fireEvent.change(agriculturalAreaInput, { target: { value: "" } });
    fireEvent.change(vegetationAreaInput, { target: { value: "" } });
    fireEvent.blur(totalAreaInput);

    const errorMessage = await screen.findByText(
      /A área total deve ser maior que zero/i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("deve exibir um erro se a área total for menor que a soma das áreas agrícola e de vegetação", async () => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockOnSubmit}>
        <PropertyEditForm
          initialValues={initialValues}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </Formik>
    );

    const totalAreaField = screen.getByLabelText("Área Total (ha)");
    fireEvent.change(totalAreaField, { target: { value: 70 } });
    fireEvent.blur(totalAreaField);

    await waitFor(() =>
      expect(
        screen.getByText(
          "A área total deve ser maior ou igual à soma das áreas agrícola e de vegetação."
        )
      ).toBeInTheDocument()
    );
  });

  it("deve permitir adicionar uma nova cultura", async () => {
    render(
      <Formik initialValues={initialValues} onSubmit={mockOnSubmit}>
        <PropertyEditForm
          initialValues={initialValues}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </Formik>
    );

    const addCropButton = screen.getByText("Adicionar Cultura");
    await act(async () => {
      fireEvent.click(addCropButton);
    });

    expect(screen.getByText("Adicionar Nova Cultura")).toBeInTheDocument();
  });

  it("deve exibir a cultura editada ao clicar em editar", async () => {
    const crops = [{ id: 1, season: "2024", culture: "Soja" }];
    const initialValuesWithCrops = { ...initialValues, crops };

    render(
      <Formik initialValues={initialValuesWithCrops} onSubmit={mockOnSubmit}>
        <PropertyEditForm
          initialValues={initialValuesWithCrops}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </Formik>
    );

    const editButton = screen.getByText("Editar");
    await act(async () => {
      fireEvent.click(editButton);
    });

    expect(screen.getByText("Editar Cultura")).toBeInTheDocument();
    expect(screen.getByDisplayValue("2024")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Soja")).toBeInTheDocument();
  });

  it("deve permitir excluir uma cultura", async () => {
    const crops = [{ id: 1, season: "2024", culture: "Soja" }];
    const initialValuesWithCrops = { ...initialValues, crops };

    render(
      <Formik initialValues={initialValuesWithCrops} onSubmit={mockOnSubmit}>
        <PropertyEditForm
          initialValues={initialValuesWithCrops}
          onCancel={mockOnCancel}
          onSubmit={mockOnSubmit}
        />
      </Formik>
    );

    const deleteButton = screen.getByText("Excluir");
    await act(async () => {
      fireEvent.click(deleteButton);
    });

    expect(screen.queryByText("Soja")).not.toBeInTheDocument();
  });
});
