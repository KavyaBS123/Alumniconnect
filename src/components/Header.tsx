import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, Briefcase, User, Mail, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <Link to="/" className="text-2xl font-bold">Oxford College of Engineering</Link>
          <Link to="/login" className="flex items-center"><LogIn className="mr-1" size={18} /> Login</Link>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            <li><Link to="/directory" className="flex items-center"><Users className="mr-1" size={18} /> Directory</Link></li>
            <li><Link to="/events" className="flex items-center"><Calendar className="mr-1" size={18} /> Events</Link></li>
            <li><Link to="/job-board" className="flex items-center"><Briefcase className="mr-1" size={18} /> Job Board</Link></li>
            <li><Link to="/alumni" className="flex items-center"><Users className="mr-1" size={18} /> Alumni</Link></li>
            <li><Link to="/newsletter" className="flex items-center"><Mail className="mr-1" size={18} /> Newsletter</Link></li>
            <li><Link to="/profile" className="flex items-center"><User className="mr-1" size={18} /> Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;