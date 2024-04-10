import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ConnexionPage from '../../pages/ConnexionPage'; // Ajustez le chemin selon votre structure

describe('<ConnexionPage />', () => {
  it('doit charger le composant Connexion', () => {
    render(
      <Router>
        <ConnexionPage />
      </Router>
    );
    expect(screen.getByPlaceholderText(/Votre email/i)).toBeInTheDocument();
  });

  // Vous pourriez ajouter des tests supplémentaires liés à la page ici...
});
