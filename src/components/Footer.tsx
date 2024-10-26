// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto px-4 text-center">
//         <p>&copy; 2024 Oxford College of Engineering Alumni Connect. All rights reserved.</p>
//         <div className="mt-4">
//           <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Privacy Policy</a>
//           <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Terms of Service</a>
//           <a href="#" className="text-blue-400 hover:text-blue-300 mx-2">Contact Us</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Github, Send } from 'lucide-react';

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    {children}
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Discover</h2>
            <p className="text-gray-300 mb-4">
              Stay connected with your alma mater and fellow alumni through our extensive network and resources.
            </p>
            <div className="flex gap-4 text-gray-300">
              <Phone size={20} />
              <Mail size={20} />
              <MapPin size={20} />
            </div>
          </div>

          {/* Reader Services */}
          <FooterSection title="Alumni Services">
            <FooterLink href="/account">My Account</FooterLink>
            <FooterLink href="/events">Events Calendar</FooterLink>
            <FooterLink href="/reservations">Event Reservations</FooterLink>
            <FooterLink href="/card">Alumni Card</FooterLink>
            <FooterLink href="/history">Activity History</FooterLink>
          </FooterSection>

          {/* Resources */}
          <FooterSection title="Resources">
            <FooterLink href="/directory">Alumni Directory</FooterLink>
            <FooterLink href="/jobs">Job Board</FooterLink>
            <FooterLink href="/magazines">Digital Magazines</FooterLink>
            <FooterLink href="/research">Research Tools</FooterLink>
            <FooterLink href="/journals">Academic Journals</FooterLink>
          </FooterSection>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates about new events and opportunities.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded flex-grow"
              />
              <button className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition-colors">
                <Send size={20} />
              </button>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="/facebook" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="/twitter" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="/linkedin" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="/github" className="text-gray-300 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Oxford College of Engineering Alumni Connect. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
