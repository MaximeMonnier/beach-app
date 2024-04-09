import React from 'react';
import NavBar from '../components/NavBar';
import backgroundImage from '../assets/bg-run.jpg'

const Accueil: React.FC = () => {
  return (
    
    <div className="h-screen bg-cover bg-center rounded-tl-3xl rounded-tr-3xl" style={{backgroundImage: `url(${backgroundImage})`}}> 
      <NavBar />
    </div>
  );
}

export default Accueil;
