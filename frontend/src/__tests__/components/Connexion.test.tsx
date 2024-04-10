import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Connexion from '../../components/Connexion'; 

// Mock d'axios pour éviter les appels réseau réels
jest.mock('axios');

describe('<Connexion />', () => {
  beforeEach(() => {
    render(
        <Router>
          <Connexion />
        </Router>
      );
  });

  it('affiche les champs email et mot de passe', () => {
    expect(screen.getByPlaceholderText(/Votre email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Votre mot de passe/i)).toBeInTheDocument();
  });

});
