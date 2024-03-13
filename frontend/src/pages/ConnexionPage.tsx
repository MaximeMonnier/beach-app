import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Connexion from '../components/Connexion';

const Login_Register: () => JSX.Element = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className='container-form'>
      <Connexion />
    </div>
  );
}

export default Login_Register;
