import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';


//Component
import RegisterPage from './pages/RegisterPage';
import ConnexionPage from './pages/ConnexionPage';
import Accueil from './pages/Accueil';

//middleware
import ProtectedRoute from './middleware/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/connexion" element={<ConnexionPage />} />
      <Route path="/accueil" element={<ProtectedRoute>
        <Accueil />
      </ProtectedRoute>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
