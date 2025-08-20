import React from 'react';

const BackgroundVectors: React.FC = () => {
  return (
    <>

      {/* Laptop and smaller screens */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden 2xl:hidden"
        style={{
          backgroundImage: 'url("/images/Background.png")',
          backgroundSize: '120%',
          backgroundPosition: 'calc(100% + 320px) calc(100% + 410px)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Very large desktop screens */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden hidden 2xl:block"
        style={{
          backgroundImage: 'url("/images/Background.png")',
          backgroundSize: '130%',
          backgroundPosition: 'calc(100% + 500px) calc(100% + 600px)',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </>
  );
};

export default BackgroundVectors;