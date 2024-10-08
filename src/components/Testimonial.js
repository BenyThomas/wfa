import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary text-white animate-slide-up duration-[4000ms] ease-out">
      <div className="container mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl font-bold mb-12 font-heading">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover-section">
            <p className="text-xl italic font-body">"The hearing aids have changed my life. I can hear my grandchildren again!"</p>
            <h4 className="mt-4 font-semibold font-body">Banyenzachi M.</h4>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover-section">
            <p className="text-xl italic">"Excellent service and support. Highly recommend WFA Hearing Centre."</p>
            <h4 className="mt-4 font-semibold">Caroline S.</h4>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover-section">
            <p className="text-xl italic">"My hearing is better than it has been in years. Thank you!"</p>
            <h4 className="mt-4 font-semibold">Doroth Z.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
