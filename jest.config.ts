import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.app.json",
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;
