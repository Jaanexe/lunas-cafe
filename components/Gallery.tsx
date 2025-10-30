
import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
  'https://images.unsplash.com/photo-1659626672810-b10f364b2c54',
  'https://images.unsplash.com/photo-1651783976258-3072215aac82',
  'https://images.unsplash.com/photo-1693540553111-f66c59eb2459',
  'https://images.unsplash.com/photo-1761078658542-ee5754031a85',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn6.dissolve.com%2Fp%2FD2012_136_044%2FD2012_136_044_1200.jpg&f=1&nofb=1&ipt=5da499ff0fb89db673153ede8c2fdf8f4509cf2bd7cd38097e3e608f2613e53c'
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark">Moments at Luna's</h2>
          <div className="w-24 h-1 bg-coffee-light mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={src} 
                alt={`A moment at Luna's Café ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;