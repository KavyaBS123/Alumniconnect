import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2">Welcome to Oxford College of Engineering</h1>
      <h2 className="text-2xl text-gray-600 mb-6">Alumni Connect Portal</h2>
      <p className="text-xl mb-8">Stay connected with your fellow alumni!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/directory" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Alumni Directory</h2>
          <p>Connect with fellow graduates and expand your network.</p>
        </Link>
        <Link to="/events" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <p>Stay informed about reunions, webinars, and networking events.</p>
        </Link>
        <Link to="/job-board" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Job Board</h2>
          <p>Explore career opportunities or post job openings for fellow alumni.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;