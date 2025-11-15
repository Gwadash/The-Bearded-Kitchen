
import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import MenuItem from './MenuItem';

const fanFavourites: MenuItemType[] = [
  {
    name: 'Meaty Pie',
    description: 'Ham, Bacon, Mince, Russian, Garlic, Peppers & Onions',
    price: 'R 95.50',
  },
  {
    name: 'Honey & Mustard Spare Rib',
    description: 'Marinated Rib, Olives, Garlic, Mushrooms, Peppers & Cheese',
    price: 'R 105.00',
  },
  {
    name: 'Biltong',
    description: 'Biltong & Feta',
    price: 'R 100.00',
  },
];

const spicyItems: MenuItemType[] = [
    {
    name: 'The Bearded One',
    description: 'Mince, Russians, Jalapeno, Garlic, Peppers, Mushrooms & Cheese',
    price: 'R 99.90',
    spicyLevel: 'mild',
  },
  {
    name: 'The Red Russian',
    description: 'Russians, Jalapeno, Hot Sauce & Cheese',
    price: 'R 90.00',
    spicyLevel: 'hot',
  },
  {
    name: 'The Mexican',
    description: 'Mince, Jalapeno, Red Piri & Cheese',
    price: 'R 93.50',
    spicyLevel: 'very hot',
  },
];


const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-brand-primary">Our Menu</h2>
          <p className="text-lg text-gray-600 mt-2">Taste the passion in every slice.</p>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold font-serif text-brand-dark mb-8 text-center md:text-left">Fan Favourites</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fanFavourites.map((item, index) => (
              <MenuItem key={`fav-${index}`} item={item} />
            ))}
          </div>

          <h3 className="text-3xl font-bold font-serif text-brand-dark mb-8 text-center md:text-left">For the Spice Lovers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spicyItems.map((item, index) => (
              <MenuItem key={`spicy-${index}`} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Menu;
