import { render, screen } from '@testing-library/react';
import Accueil from '../../pages/Accueil'; 

describe('<Accueil />', () => {
  test('affiche le message de bienvenue', () => {
    render(<Accueil />);
    const welcomeMessage = screen.getByText('Bienvenue sur la page d\'accueil !');
    expect(welcomeMessage).toBeInTheDocument();
  });
});
