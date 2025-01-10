import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProducersData from "../../data/db.json";
import { iProducer, iProducerState } from "../../types";

const transformData = (data: any[]): iProducer[] => {
  return data.map((item) => ({
    id: item.id,
    name: item.name || "",
    cpfOrCnpj: item.cpfOrCnpj || "",
    properties: item.properties || [],
  }));
};

const initialState: iProducerState = {
  value: transformData(ProducersData.producers),
};

export const producerSlice = createSlice({
  name: "producers",
  initialState,
  reducers: {
    addProducer: (state, action: PayloadAction<Omit<iProducer, "id">>) => {
      const maxId = state.value.length
        ? Math.max(...state.value.map((producer) => producer.id))
        : 0;
      const newProducer = {
        ...action.payload,
        id: maxId + 1,
      };
      state.value.push(newProducer);
    },

    deleteProducer: (state, action: PayloadAction<{ id: number }>) => {
      state.value = state.value.filter(
        (producer) => producer.id !== action.payload.id
      );
    },
    updateProducer: (
      state,
      action: PayloadAction<{ id: number; name: string; cpfOrCnpj: string }>
    ) => {
      const producer = state.value.find(
        (producer) => producer.id === action.payload.id
      );
      if (producer) {
        producer.name = action.payload.name;
        producer.cpfOrCnpj = action.payload.cpfOrCnpj;
      }
    },
    addProperty: (
      state,
      action: PayloadAction<{ producerId: number; property: any }>
    ) => {
      const producer = state.value.find(
        (producer) => producer.id === action.payload.producerId
      );
      if (producer) {
        const newProperty = {
          ...action.payload.property,
          id: producer.properties.length
            ? Math.max(...producer.properties.map((prop) => prop.id)) + 1
            : 1,
        };
        producer.properties.push(newProperty);
      }
    },
    updateProperty: (
      state,
      action: PayloadAction<{
        producerId: number;
        propertyId: number;
        updatedProperty: any;
      }>
    ) => {
      const producer = state.value.find(
        (producer) => producer.id === action.payload.producerId
      );
      if (producer) {
        const property = producer.properties.find(
          (prop) => prop.id === action.payload.propertyId
        );
        if (property) {
          Object.assign(property, action.payload.updatedProperty);
        }
      }
    },
    deleteProperty: (
      state,
      action: PayloadAction<{ producerId: number; propertyId: number }>
    ) => {
      const producer = state.value.find(
        (producer) => producer.id === action.payload.producerId
      );
      if (producer) {
        producer.properties = producer.properties.filter(
          (prop) => prop.id !== action.payload.propertyId
        );
      }
    },
  },
});

export const {
  addProducer,
  deleteProducer,
  updateProducer,
  addProperty,
  updateProperty,
  deleteProperty,
} = producerSlice.actions;

export default producerSlice.reducer;
