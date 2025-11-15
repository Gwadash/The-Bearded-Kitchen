
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 font-serif text-brand-primary">Who Are We?</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The Bearded Kitchen is a takeaway shop with a variety of food specialities. One of our mains are handmade Wood Fire Pizzas, crafted with our own dough recipe and loaded with delicious toppings.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are passionate about creating memorable flavors and providing our community with high-quality, delicious food. Come taste the difference!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
                <div className="bg-brand-primary text-white rounded-full p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a8.93 8.93 0 0 1-7.1-3.23 8.82 8.82 0 0 1-1.76-8.71l.2-.5 2.27-5.3a1.44 1.44 0 0 1 1.3-.9H17.1a1.44 1.44 0 0 1 1.3.9l2.27 5.3.2.5a8.82 8.82 0 0 1-1.76 8.71A8.93 8.93 0 0 1 12 22Z"/><path d="M18.78 12.42A8.82 8.82 0 0 1 12 22a8.82 8.82 0 0 1-6.78-9.58"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 6.34 1.41-1.41"/></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Wood-Fired Perfection</h3>
                <p className="text-gray-600">Our pizzas are cooked in a traditional wood-fired oven for that authentic, crispy crust.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-brand-primary text-white rounded-full p-4 mb-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.31 8H9.69a2 2 0 0 0-1.63 3.12l4.62 7.18a2 2 0 0 0 3.26 0l4.62-7.18A2 2 0 0 0 14.31 8Z"/><path d="m5 8 1.68 2.6a2 2 0 0 0 3.22 0L12 8l-2.09 3.2a2 2 0 0 1-3.22 0Z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Quality Ingredients</h3>
                <p className="text-gray-600">We use only the freshest, locally-sourced ingredients for the best taste.</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-brand-primary text-white rounded-full p-4 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Our Secret Recipe</h3>
                <p className="text-gray-600">Our unique dough recipe has been perfected over years for a one-of-a-kind flavor.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
