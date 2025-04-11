import React from 'react';

const Testimonial = ({ name, text, imageUrl }) => {
  return (
    <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-lg">
      <img className="w-24 h-24 rounded-full mb-4" src={imageUrl} alt={name} />
      <p className="italic text-gray-700 mb-4">"{text}"</p>
      <p className="font-semibold text-gray-900">{name}</p>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Testimonial 
          name="John Doe" 
          text="This is the best service I have ever used. Highly recommend!" 
          imageUrl="https://randomuser.me/api/portraits/men/32.jpg" 
        />
        <Testimonial 
          name="Jane Smith" 
          text="Excellent customer service and fantastic products." 
          imageUrl="https://randomuser.me/api/portraits/women/44.jpg" 
        />
        <Testimonial 
          name="Alex Johnson" 
          text="A truly outstanding experience. Very satisfied." 
          imageUrl="https://randomuser.me/api/portraits/men/58.jpg" 
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
