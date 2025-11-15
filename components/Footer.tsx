
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg font-bold mb-2">The Bearded Kitchen</p>
        <p className="mb-4">&copy; {new Date().getFullYear()} The Bearded Kitchen. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
