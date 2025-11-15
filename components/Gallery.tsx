
import React from 'react';

const images = [
  { src: 'https://picsum.photos/id/305/600/400', alt: 'A delicious, cheesy pizza slice being lifted.' },
  { src: 'https://picsum.photos/id/1060/600/400', alt: 'A traditional wood-fired pizza oven with flames inside.' },
  { src: 'https://picsum.photos/id/431/600/400', alt: 'Fresh ingredients for pizza, including tomatoes, basil, and cheese.' },
  { src: 'https://picsum.photos/id/1080/600/400', alt: 'The cozy storefront of a local pizza restaurant.' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-brand-primary">Gallery</h2>
          <p className="text-lg text-gray-600 mt-2">A Glimpse of Our Kitchen</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
