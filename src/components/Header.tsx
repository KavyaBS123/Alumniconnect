// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Users, Calendar, Briefcase, User, Mail, LogIn } from 'lucide-react';

// const Header = () => {
//   return (
//     <header className="bg-blue-600 text-white shadow-md">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center mb-4">
//           <Link to="/" className="text-2xl font-bold">The Oxford College of Engineering</Link>
//           <Link to="/login" className="flex items-center"><LogIn className="mr-1" size={18} /> Login</Link>
//         </div>
//         <nav>
//           <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
//             <li><Link to="/directory" className="flex items-center"><Users className="mr-1" size={18} /> Directory</Link></li>
//             <li><Link to="/events" className="flex items-center"><Calendar className="mr-1" size={18} /> Events</Link></li>
//             <li><Link to="/job-board" className="flex items-center"><Briefcase className="mr-1" size={18} /> Job Board</Link></li>
//             <li><Link to="/alumni" className="flex items-center"><Users className="mr-1" size={18} /> Alumni</Link></li>
//             <li><Link to="/newsletter" className="flex items-center"><Mail className="mr-1" size={18} /> Newsletter</Link></li>
//             <li><Link to="/profile" className="flex items-center"><User className="mr-1" size={18} /> Profile</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React from 'react';
import { UserCircle2, CalendarDays, Briefcase, Users, Mail, User } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

const NavItem = ({ href, icon, text }: NavItemProps) => (
  <a 
    href={href}
    className="flex items-center gap-2 px-4 py-2 text-white hover:bg-blue-600 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </a>
);

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Top bar with title and login */}
      <div className="bg-blue-600 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">The Oxford College of Engineering</h1>
        <a 
          href="/login" 
          className="flex items-center gap-2 text-white hover:text-blue-100 transition-colors"
        >
          <UserCircle2 size={20} />
          <span>Login</span>
        </a>
      </div>

      {/* Navigation links */}
      <nav className="bg-blue-500 px-6 py-2 flex items-center gap-6 overflow-x-auto">
        <NavItem 
          href="/directory" 
          icon={<Users size={20} />} 
          text="Directory"
        />
        <NavItem 
          href="/events" 
          icon={<CalendarDays size={20} />} 
          text="Events"
        />
        <NavItem 
          href="/jobs" 
          icon={<Briefcase size={20} />} 
          text="Job Board"
        />
        <NavItem 
          href="/alumni" 
          icon={<User size={20} />} 
          text="Alumni"
        />
        <NavItem 
          href="/newsletter" 
          icon={<Mail size={20} />} 
          text="Newsletter"
        />
        <NavItem 
          href="/profile" 
          icon={<UserCircle2 size={20} />} 
          text="Profile"
        />
      </nav>
    </div>
  );
};

export default Navbar;
