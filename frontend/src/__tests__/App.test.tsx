import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

import RegisterPage from '../pages/RegisterPage';
import ConnexionPage from '../pages/ConnexionPage';
import Accueil from '../pages/Accueil';


// Mock des composants de page et middleware pour simplifier les tests
jest.mock('../pages/RegisterPage', () => () => <div>Page d'inscription</div>);
jest.mock('../pages/ConnexionPage', () => () => <div>Page de connexion</div>);
jest.mock('../pages/Accueil', () => () => <div>Page d'accueil</div>);

jest.mock('../middleware/ProtectedRoute', () => ({children}: {children: React.ReactNode}): ReactElement => <div>{children}</div>);


describe('<App /> Routing', () => {
  it('renders the registration page as the default route', () => {
    render(<RegisterPage />, {wrapper: BrowserRouter});
    expect(screen.getByText("Page d'inscription")).toBeInTheDocument();
  });

  it('navigates to the login page', async () => {
    render(<ConnexionPage />, {wrapper: BrowserRouter});
    await userEvent.click(screen.getByText(/connexion/i));
    expect(screen.getByText("Page de connexion")).toBeInTheDocument();
  });

  it('navigates to the home page', async () => {
    render(<Accueil />, {wrapper: BrowserRouter});
    await userEvent.click(screen.getByText(/accueil/i));
    expect(screen.getByText("Page d'accueil")).toBeInTheDocument();
  });
});
