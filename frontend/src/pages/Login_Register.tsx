import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Register from '../components/Register';
import Connexion from '../components/Connexion';

function Login_Register() {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;
    gsap.fromTo(elements, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <div ref={containerRef} className='container-form'>
      <Register />
      <div className="bar"></div>
      <Connexion/>
    </div>
  );
}

export default Login_Register;
