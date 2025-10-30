
import React from 'react';
import StarIcon from './icons/StarIcon';

const testimonials = [
  {
    name: 'Sarah L.',
    stars: 5,
    review: "The best coffee I've had in the city! The atmosphere is so cozy and the staff are incredibly friendly. My new favorite spot."
  },
  {
    name: 'Mike R.',
    stars: 5,
    review: "Luna's Café is a gem. Their homemade brownies are to die for, and the Wi-Fi is fast and reliable. Perfect for getting some work done."
  },
  {
    name: 'Jessica T.',
    stars: 4,
    review: "A wonderful little place to unwind. The latte art is always beautiful, and it tastes as good as it looks. Can get a bit busy, but it's worth it."
  }
];

const TestimonialCard: React.FC<{ name: string; stars: number; review: string }> = ({ name, stars, review }) => (
  <div className="bg-beige p-8 rounded-lg shadow-lg text-center flex flex-col items-center">
    <div className="flex mb-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} filled={index < stars} />
      ))}
    </div>
    <p className="text-text-main italic mb-6">"{review}"</p>
    <p className="font-bold font-serif text-coffee-dark">- {name}</p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-coffee-light mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
