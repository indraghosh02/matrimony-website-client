import React from 'react';

const ContactUs = () => {
  return (
    <section className="relative py-16 bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/cCSJr3t/blurred-picture-kissing-wedding-couple-standing-before-gorgeous-mountain-landscape.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50" 
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, our team is here to help.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-1/2 p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600" rows="4"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">Send Message</button>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2 p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">
              You can also reach us at:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z"/>
                </svg>
                <span>123 Love Street, Suite 100, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4.01h-20c-1.1 0-2 .89-2 1.99v12c0 1.1.89 2 2 2h20c1.1 0 2-.89 2-2v-12c0-1.1-.89-1.99-2-1.99zm0 14h-20v-12h20v12zm-11-11h-9v2h9v-2zm4.8 2h-2.4v6h2.4v-6zm1.2 8h-5v2h5v-2z"/>
                </svg>
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.43 6.59l-9-5c-.3-.16-.65-.16-.95 0l-9 5c-.34.19-.53.55-.47.92l1 6.75c.03.22.14.43.31.59l8.16 7.59c.38.36.97.36 1.35 0l8.16-7.59c.17-.16.28-.37.31-.59l1-6.75c.05-.37-.12-.73-.46-.92zm-9.43 12.56l-6.72-6.25 1-6.38 5.72 3.18 5.72-3.18 1 6.38-6.72 6.25z"/>
                </svg>
                <span>contact@loveline.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
