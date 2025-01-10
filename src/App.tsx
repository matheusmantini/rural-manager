import MainLayout from "./components/templates/MainLayout";
import Dashboard from "./components/organisms/dashboardChart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProducersPage from "./pages/producer";
import DetailedProducerPage from "./pages/producerDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="produtor" element={<ProducersPage />} />
          <Route path="/produtor/:id" element={<DetailedProducerPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
