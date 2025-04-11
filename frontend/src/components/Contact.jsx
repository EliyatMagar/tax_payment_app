import React, { useState } from 'react';
import governmentLogo from '../assets/logo.svg'; // Your government logo
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server or show success message
    alert('Message sent!');
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Contact Information */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-4">Get in touch with us by filling the form below or contact us via the details below.</p>
        </div>

        {/* Contact Details (Government Info) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Government Logo */}
          <div className="flex justify-center items-center">
            <img src={governmentLogo} alt="Government Logo" className="w-40 h-auto" />
          </div>

          {/* Contact Numbers & Email */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Government Contact</h3>
            <p className="text-gray-600">For any inquiries, please reach out to us:</p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                <span className="font-medium">Phone:</span> +1 800-123-4567
              </li>
              <li>
                <span className="font-medium">Email:</span> contact@gov.example.com
              </li>
              <li>
                <span className="font-medium">Address:</span> 123 Government Street, City, Country
              </li>
            </ul>
          </div>

          {/* Links for Social Media or Website */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <p className="text-gray-600">Follow us on our social platforms:</p>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li><Link to="https://facebook.com" target="_blank" className="hover:text-blue-500">Facebook</Link></li>
              <li><Link to="https://twitter.com" target="_blank" className="hover:text-blue-500">Twitter</Link></li>
              <li><Link to="https://instagram.com" target="_blank" className="hover:text-blue-500">Instagram</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="youremail@example.com"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                rows="6"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
