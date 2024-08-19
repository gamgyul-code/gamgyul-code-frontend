import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext"; // LanguageProvider 추가
import AttractionListPage from "./pages/AttractionListPage";
import CompletePage from "./pages/CompletePage";
import HomePage from "./pages/HomePage";
import LanguageSelectPage from "./pages/LanguageSelectPage";
import LocationFormPage from "./pages/LocationFormPage";
import MapDetailPage from "./pages/MapDetailPage";
import MapDetailPage2 from "./pages/MapDetailPage2/index";
import MapPage from "./pages/MapPage/index";
import MyTripPage from "./pages/MyTripPage";
import ThemeFormPage from "./pages/ThemeFormPage";
import { GlobalStyles } from "./style/global";
function App() {
  return (
    <LanguageProvider>
      <div className="layout">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LanguageSelectPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail" element={<MapDetailPage />} />
          <Route path="/detail2" element={<MapDetailPage2 />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/complete" element={<CompletePage />} />
          <Route path="/attractions/:id" element={<AttractionListPage />} />
          <Route path="/trip" element={<MyTripPage />} />

          {/* 추가 페이지 (임시) */}
          <Route path="/theme" element={<ThemeFormPage />} />
          <Route path="/location" element={<LocationFormPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
