import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Register from '../components/Register';


const Login_Register: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Assurez-vous que containerRef.current n'est pas null avant de tenter d'accéder à ses enfants
    if (containerRef.current) {
      const elements = containerRef.current.children;
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="container-form h-screen flex items-center justify-center">
      <div className="bar h-40 w-2 bg-color-2 m-0 15"></div>
      <Register />
    </div>
  );
}

export default Login_Register;


