
import React from 'react';

const menuItems = [
  { name: 'Espresso', price: '$3.00' },
  { name: 'Latte', price: '$4.50' },
  { name: 'Cappuccino', price: '$4.50' },
  { name: 'Americano', price: '$3.50' },
  { name: 'Matcha Latte', price: '$5.00' },
  { name: 'Chai Latte', price: '$4.75' },
  { name: 'Classic Croissant', price: '$3.50' },
  { name: 'Chocolate Brownie', price: '$4.00' },
  { name: 'Avocado Toast', price: '$8.00' },
];

const MenuItem: React.FC<{ name: string; price: string }> = ({ name, price }) => (
  <div className="bg-cream p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex justify-between items-baseline">
      <h3 className="text-xl font-semibold text-text-main font-sans">{name}</h3>
      <p className="text-lg font-bold text-coffee-dark font-serif">{price}</p>
    </div>
  </div>
);

const Menu: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-coffee-dark">Our Menu</h2>
          <div className="w-24 h-1 bg-coffee-light mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.name} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
