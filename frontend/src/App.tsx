import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

import RegisterPage from './pages/RegisterPage';
import ConnexionPage from './pages/ConnexionPage';
import Accueil from './pages/Accueil';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/connexion" element={<ConnexionPage />} />
      <Route path="/accueil" element={<Accueil />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
