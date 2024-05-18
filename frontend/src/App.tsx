import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//Component
import RegisterPage from "./pages/RegisterPage";
import ConnexionPage from "./pages/ConnexionPage";
import Accueil from "./pages/Accueil";

//Middleware
import ProtectedRoute from "./middleware/ProtectedRoute";

// Pages
import Terrain from "./pages/Terrain";
import LeuActu from "./pages/LeuActu";
import Association from "./pages/Association";
import Evenement from "./pages/Evenement";
import Blog from "./pages/Blog";
import Meteo from "./pages/Meteo";
import Page404 from "./pages/Page404";
import FullCalendar from "./pages/FullCalendarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConnexionPage />} />
        <Route path="/fullcalendar" element={<FullCalendar />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/accueil"
          element={
            <ProtectedRoute>
              <Accueil />
            </ProtectedRoute>
          }
        />
        <Route
          path="/terrain"
          element={
            <ProtectedRoute>
              <Terrain />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leuactu"
          element={
            <ProtectedRoute>
              <LeuActu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/association"
          element={
            <ProtectedRoute>
              <Association />
            </ProtectedRoute>
          }
        />
        <Route
          path="/evenement"
          element={
            <ProtectedRoute>
              <Evenement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/meteo"
          element={
            <ProtectedRoute>
              <Meteo />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
