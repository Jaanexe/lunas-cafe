import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark">Visit Us</h2>
          <div className="w-24 h-1 bg-coffee-light mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-cream p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-coffee-dark font-bold mb-2">Address</h3>
                <p className="text-text-main">123 Cozy Lane, Downtown, CA 90210</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif text-coffee-dark font-bold mb-2">Opening Hours</h3>
                <p className="text-text-main">Mon - Fri: 7am - 6pm</p>
                <p className="text-text-main">Sat - Sun: 8am - 5pm</p>
              </div>
              <div className="mt-8 flex justify-center lg:justify-start space-x-6">
                <a href="https://jaanexe-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-coffee-dark hover:text-text-main transition-colors duration-300">
                  <InstagramIcon />
                </a>
                <a href="https://jaanexe-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-coffee-dark hover:text-text-main transition-colors duration-300">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-80 lg:h-auto rounded-lg shadow-lg overflow-hidden">
             <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                <p>Google Maps Embed Placeholder</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
