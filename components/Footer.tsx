
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-beige py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Luna’s Café. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
