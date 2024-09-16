import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Hearing Solutions</h2>
          <p className="text-lg text-gray-600">Explore the range of products and services we offer to improve your hearing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/hearing-aids3.jpeg" alt="Service 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-semibold mt-4">Hearing Aids</h3>
            <p className="text-gray-600 mt-2">Explore the latest technology in hearing aids designed for your unique needs.</p>
            <button className="mt-4 text-primary hover:text-accent">Learn More</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/hearing-tests.jpeg" alt="Service 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-semibold mt-4">Hearing Tests</h3>
            <p className="text-gray-600 mt-2">Get a professional hearing test to understand your hearing needs.</p>
            <button className="mt-4 text-primary hover:text-accent">Learn More</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img src="/images/after-services.jpeg" alt="Service 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-semibold mt-4">Aftercare Services</h3>
            <p className="text-gray-600 mt-2">Keep your hearing aids in top condition with our aftercare services.</p>
            <button className="mt-4 text-primary hover:text-accent">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
