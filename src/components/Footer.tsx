import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Oxford College of Engineering Alumni Connect. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Privacy Policy</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Terms of Service</a>
          <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;