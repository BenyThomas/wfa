import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 animate-slide-up duration-1000 ease-out">
      <div className="container mx-auto ">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-bold mb-4 hover-section font-heading">Our Hearing Solutions</h2>
          <p className="font-body text-lg text-gray-600 hover-section font-body">Explore the range of products and services we offer to improve your hearing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section animate-fadeIn animate-bounce">
            <img src="/images/hearing-aids-2.jpg" alt="Service 1" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-semibold mt-4 font-body">Hearing Aids</h3>
            <p className="text-gray-600 mt-2 font-body">Explore the latest technology in hearing aids designed for your unique needs.</p>
            <button className="mt-4 text-primary hover:text-accent font-body">Learn More</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section animate-fadeIn animate-bounce">
            <img src="/images/hearing-test-2.jpg" alt="Service 2" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-semibold mt-4 font-body">Hearing Tests</h3>
            <p className="text-gray-600 mt-2 font-body">Get a professional hearing test to understand your hearing needs.</p>
            <button className="mt-4 text-primary hover:text-accent font-body">Learn More</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover-section animate-fadeIn animate-bounce" >
            <img src="/images/after-service-care.jpg" alt="Service 3" className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-semibold mt-4 font-body">Aftercare Services</h3>
            <p className="text-gray-600 mt-2 font-body">Keep your hearing aids in top condition with our aftercare services.</p>
            <button className="mt-4 text-primary hover:text-accent font-body">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
