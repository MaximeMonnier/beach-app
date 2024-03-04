import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

import Login_Register from './pages/Login_Register';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login_Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
