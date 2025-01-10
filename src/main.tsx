import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store.ts";
import GlobalStyles from "./GlobalStyles.ts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <ToastContainer />
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
