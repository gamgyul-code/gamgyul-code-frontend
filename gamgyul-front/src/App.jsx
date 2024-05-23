import { Routes, Route } from "react-router-dom";
import "./App.css";
import LocationFormPage from "./pages/LocationFormPage";
import LocationListPage from "./pages/LocationListPage";
import MapDetailPage from "./pages/MapDetailPage";
import LanguagePage from "./pages/LanguagePage";
import MapPage from "./pages/MapPage/index";
import { GlobalStyles } from "./style/global";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="layout">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LocationFormPage />} />
          <Route path="/list" element={<LocationListPage />} />
          <Route path="/detail" element={<MapDetailPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/language" element={<LanguagePage />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
