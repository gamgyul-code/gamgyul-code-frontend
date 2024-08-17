import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MapDetailPage from "./pages/MapDetailPage";
import MapDetailPage2 from "./pages/MapDetailPage2/index";
import LanguagePage from "./pages/LanguagePage";
import MapPage from "./pages/MapPage/index";
import CompletePage from "./pages/CompletePage";
import ThemeFormPage from "./pages/ThemeFormPage";
import LocationFormPage from "./pages/LocationFormPage";
import { GlobalStyles } from "./style/global";
import { LanguageProvider } from "./contexts/LanguageContext"; // LanguageProvider 추가
import AttractionListPage from "./pages/AttractionListPage";
import MyTripPage from "./pages/MyTripPage";
import MyRouteCompletePage from "./pages/MyRouteCompletePage";
import TripRoutePage from "./pages/TripRoutePage";
function App() {
  return (
    <LanguageProvider>
      <div className="layout">
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LanguagePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail" element={<MapDetailPage />} />
          <Route path="/detail2" element={<MapDetailPage2 />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/complete" element={<CompletePage />} />
          <Route path="/attractions/:id" element={<AttractionListPage />} />
          <Route path="/trip" element={<MyTripPage />} />
          <Route path="/route/:id" element={<TripRoutePage />} />
          <Route path="/route-complete" element={<MyRouteCompletePage />} />

          {/* 추가 페이지 (임시) */}
          <Route path="/theme" element={<ThemeFormPage />} />
          <Route path="/location" element={<LocationFormPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
