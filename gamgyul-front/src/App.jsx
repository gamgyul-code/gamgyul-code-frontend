import { Routes, Route } from "react-router-dom";
import "./App.css";
import LocationFormPage from "./pages/LocationFormPage";
import LocationListPage from "./pages/LocationListPage";
import MapDetailPage from "./pages/MapDetailPage";
import MapPage from "./pages/MapPage/index";
import { GlobalStyles } from "./style/global";

function App() {
  return (
    <div className="layout">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LocationFormPage />} />
        <Route path="/list" element={<LocationListPage />} />
        <Route path="/detail" element={<MapDetailPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
}

export default App;
