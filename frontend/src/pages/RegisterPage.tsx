import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Register from '../components/Register';

const Login_Register: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure containerRef.current is not null before attempting to access its children
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
      <Register />
    </div>
  );
}

export default Login_Register;
