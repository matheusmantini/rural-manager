import React from "react";
import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import Dashboard from ".";
import { aggregateData } from "../../../utils/aggregateData";
import { Provider } from "react-redux";
import { producerSlice } from "../../../redux/features/Producer";
import { RootState } from "../../../redux/store";

jest.mock("../../../utils/aggregateData", () => ({
  aggregateData: jest.fn(),
}));

const getInitialState = (): RootState => ({
  producers: {
    value: [
      {
        id: 1,
        name: "Produtor 1",
        cpfOrCnpj: "12345678901",
        properties: [
          {
            id: 1,
            name: "Fazenda A",
            state: "SP",
            city: "São Paulo",
            totalArea: 200,
            agriculturalArea: 150,
            vegetationArea: 50,
            crops: [],
          },
        ],
      },
      {
        id: 2,
        name: "Produtor 2",
        cpfOrCnpj: "98765432100",
        properties: [
          {
            id: 2,
            name: "Fazenda B",
            state: "MG",
            city: "Belo Horizonte",
            totalArea: 450,
            agriculturalArea: 250,
            vegetationArea: 150,
            crops: [],
          },
        ],
      },
    ],
  },
});

const renderWithRedux = (ui: React.ReactElement, initialState: RootState) => {
  const store = configureStore({
    reducer: {
      producers: producerSlice.reducer,
    },
    preloadedState: initialState,
  });

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe("Dashboard", () => {
  beforeEach(() => {
    (aggregateData as jest.Mock).mockReturnValue({
      totalFarms: 2,
      totalArea: 300,
      byState: { SP: 1, MG: 1 },
      byCulture: { Cana: 1, Milho: 1 },
      landUsage: { agricultural: 100, vegetation: 200 },
    });
  });

  test("renderiza os componentes de estatísticas corretamente", () => {
    const initialState = getInitialState();
    renderWithRedux(<Dashboard />, initialState);

    expect(
      screen.getByText("Total de fazendas cadastradas")
    ).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();

    expect(
      screen.getByText("Total de hectares registrados")
    ).toBeInTheDocument();
    expect(screen.getByText("300")).toBeInTheDocument();
  });

  test("renderiza os gráficos corretamente", () => {
    const initialState = getInitialState();
    renderWithRedux(<Dashboard />, initialState);

    expect(screen.getByText("Propriedades por Estado")).toBeInTheDocument();
    expect(screen.getByText("Culturas por Tipo")).toBeInTheDocument();
    expect(screen.getByText("Uso do Solo")).toBeInTheDocument();

    expect(screen.getByText("SP")).toBeInTheDocument();
    expect(screen.getByText("MG")).toBeInTheDocument();
    expect(screen.getByText("Cana")).toBeInTheDocument();
    expect(screen.getByText("Milho")).toBeInTheDocument();
    expect(screen.getByText("Agricultável")).toBeInTheDocument();
    expect(screen.getByText("Vegetação")).toBeInTheDocument();
  });
});
