import { Routes, Route } from "react-router-dom";
import "./App.css";
import MapDetailPage from "./pages/MapDetailPage";
import LanguagePage from "./pages/LanguagePage";
import MapPage from "./pages/MapPage/index";
import CompletePage from "./pages/CompletePage";
import { GlobalStyles } from "./style/global";
import { LanguageProvider } from "./contexts/LanguageContext"; // LanguageProvider 추가
import MapDetailPage2 from "./pages/MapDetailPage2/index";
function App() {
  return (
    <LanguageProvider>
      <div className="layout">
        <GlobalStyles />
        <Routes>
          <Route path="/frontend/" element={<LanguagePage />} />
          <Route path="/frontend/detail" element={<MapDetailPage />} />
          <Route path="/frontend/detail2" element={<MapDetailPage2 />} />
          <Route path="/frontend/map" element={<MapPage />} />
          <Route path="/frontend/complete" element={<CompletePage />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
