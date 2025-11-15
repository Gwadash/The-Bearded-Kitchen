
import React from 'react';
import { MapPin, Phone, Clock, ShoppingCart, Utensils, Truck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif text-brand-primary">Get In Touch</h2>
          <p className="text-lg text-gray-600 mt-2">We'd love to hear from you!</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <MapPin className="mx-auto h-12 w-12 text-brand-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Address</h3>
            <p className="text-gray-600">13 Beefwood Rd, Vanderbijlpark S. E. 3, Vanderbijlpark, 1911</p>
            <a href="https://www.google.com/maps/search/?api=1&query=The+Bearded+Kitchen,13+Beefwood+Rd,+Vanderbijlpark" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline mt-2 inline-block">
              Get Directions
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="mx-auto h-12 w-12 text-brand-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
            <p className="text-gray-600">Open Daily</p>
            <p className="text-gray-600 font-semibold">Until 8:00 PM</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="mx-auto h-12 w-12 text-brand-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Call to Order</h3>
            <a href="tel:0825459543" className="text-gray-600 text-lg hover:text-brand-primary">082 545 9543</a>
            <div className="mt-4 flex justify-center space-x-4">
              <span className="flex items-center text-sm text-gray-500"><Utensils size={16} className="mr-1"/>Dine-in</span>
              <span className="flex items-center text-sm text-gray-500"><ShoppingCart size={16} className="mr-1"/>Takeaway</span>
              <span className="flex items-center text-sm text-gray-500"><Truck size={16} className="mr-1"/>Delivery</span>
            </div>
          </div>

        </div>
        <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <iframe
                title="Google Map of The Bearded Kitchen"
                src="https://maps.google.com/maps?q=The%20Bearded%20Kitchen,13%20Beefwood%20Rd,%20Vanderbijlpark&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
