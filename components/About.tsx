
import React from 'react';

const About: React.FC = () => {
  const highlights = [
    'Locally roasted beans',
    'Homemade pastries',
    'Cozy atmosphere',
    'Free Wi-Fi',
  ];

  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark">A Little About Us</h2>
          <div className="w-24 h-1 bg-coffee-light mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1642315160505-b3dff3a3c8b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" 
              alt="Cozy interior of Luna's Café" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-lg font-sans text-text-main">
            <p className="mb-6 leading-relaxed">
              Welcome to Luna’s Café, your local corner for handcrafted coffee and homemade pastries. We are a community hub where the aroma of freshly roasted beans and warm, buttery croissants fills the air. We believe in the simple joy of a perfect brew and the comfort of a welcoming space. Come, find your favorite nook, and make yourself at home.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-coffee-dark mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;