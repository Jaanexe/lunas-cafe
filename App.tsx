
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream">
      <Header
        onAboutClick={() => scrollToSection(aboutRef)}
        onMenuClick={() => scrollToSection(menuRef)}
        onGalleryClick={() => scrollToSection(galleryRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main>
        <Hero onVisitClick={() => scrollToSection(contactRef)} />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={menuRef}>
          <Menu />
        </div>
        <div ref={galleryRef}>
          <Gallery />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
