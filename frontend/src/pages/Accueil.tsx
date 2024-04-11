import React from 'react';
import NavBar from '../components/NavBar';
import CardRugby from '../components/Card/CardRugby';
import CardTennis from '../components/Card/CardTennis';
import CardVolley from '../components/Card/CardVolley';

const Accueil: React.FC = () => {
  return (
    
    <div className='h-screen p-2'> 
      <NavBar />
      <div className='w-full'>
        <h1>Leubeach</h1>
      </div>
      <div className="w-full grid grid-cols-3 gap-4"> 
        <CardRugby/>
        <CardTennis/>
        <CardVolley/>
      </div>
    </div>
  );
}

export default Accueil;
