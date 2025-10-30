
import React from 'react';

interface HeroProps {
  onVisitClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onVisitClick }) => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1920&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wider mb-4">Luna’s Café</h1>
        <p className="text-xl md:text-2xl font-sans font-light mb-8">Brewed with heart.</p>
        <button 
          onClick={onVisitClick}
          className="bg-coffee-dark hover:bg-text-main text-white font-semibold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
        >
          Visit Us
        </button>
      </div>
    </section>
  );
};

export default Hero;