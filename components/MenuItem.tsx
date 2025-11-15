
import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import { Flame } from 'lucide-react';

const SpicyIndicator: React.FC<{ level: 'mild' | 'hot' | 'very hot' }> = ({ level }) => {
    const flameCount = level === 'mild' ? 1 : level === 'hot' ? 2 : 3;
    const color = level === 'mild' ? 'text-yellow-500' : level === 'hot' ? 'text-orange-500' : 'text-red-600';

    return (
        <div className="flex items-center space-x-1">
            {Array.from({ length: flameCount }).map((_, i) => (
                <Flame key={i} size={16} className={color} fill="currentColor" />
            ))}
        </div>
    );
};


const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold font-serif text-brand-dark">{item.name}</h3>
          {item.spicyLevel && <SpicyIndicator level={item.spicyLevel} />}
        </div>
        <p className="text-gray-600 mb-4">{item.description}</p>
      </div>
       <div className="px-6 pb-4 bg-gray-50">
        <p className="text-xl font-bold text-brand-primary">{item.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
