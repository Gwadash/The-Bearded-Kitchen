import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1060')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 font-serif text-shadow-lg tracking-wider text-brand-light">
          The Bearded Kitchen
        </h1>
        <p className="text-lg sm:text-2xl mb-8 text-gray-200">
          Authentic Handmade Wood-Fired Pizzas
        </p>
        <a 
          href="#menu" 
          onClick={handleScrollToMenu}
          className="bg-brand-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl cursor-pointer"
        >
          View Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;