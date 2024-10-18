import React from 'react';
import { Linkedin, Mail, Video } from 'lucide-react';

const topAlumni = [
  { id: 1, name: 'Sarah Johnson', year: 2010, department: 'Computer Science', jobRole: 'CEO', company: 'TechInnovate Inc.', achievement: 'Founded a successful AI startup', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Michael Chen', year: 2008, department: 'Electrical Engineering', jobRole: 'CTO', company: 'ElectroFuture Corp', achievement: 'Pioneered breakthrough in quantum computing', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Emily Rodriguez', year: 2012, department: 'Business Administration', jobRole: 'CFO', company: 'Global Finances Ltd', achievement: 'Youngest CFO in Fortune 500 company', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'David Kim', year: 2009, department: 'Bioengineering', jobRole: 'Research Director', company: 'BioTech Solutions', achievement: 'Developed revolutionary cancer treatment', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Olivia Patel', year: 2011, department: 'Environmental Science', jobRole: 'Sustainability Lead', company: 'EcoWorld Innovations', achievement: 'Led major global sustainability initiative', image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const otherAlumni = [
  { id: 6, name: 'Alex Thompson', year: 2015, department: 'Marketing', jobRole: 'Brand Manager' },
  { id: 7, name: 'Sophia Lee', year: 2017, department: 'Psychology', jobRole: 'Clinical Psychologist' },
  { id: 8, name: 'Daniel Brown', year: 2014, department: 'Mechanical Engineering', jobRole: 'Product Design Engineer' },
  { id: 9, name: 'Emma Wilson', year: 2016, department: 'Computer Science', jobRole: 'Software Engineer' },
  { id: 10, name: 'Ryan Garcia', year: 2013, department: 'Finance', jobRole: 'Investment Analyst' },
  { id: 11, name: 'Ava Martinez', year: 2018, department: 'Chemical Engineering', jobRole: 'Process Engineer' },
  { id: 12, name: 'Noah Taylor', year: 2012, department: 'Architecture', jobRole: 'Senior Architect' },
  { id: 13, name: 'Isabella Clark', year: 2019, department: 'Journalism', jobRole: 'Digital Content Producer' },
  { id: 14, name: 'Ethan Wright', year: 2011, department: 'Physics', jobRole: 'Research Scientist' },
  { id: 15, name: 'Mia Anderson', year: 2020, department: 'Graphic Design', jobRole: 'UI/UX Designer' },
  { id: 16, name: 'James Nelson', year: 2010, department: 'Civil Engineering', jobRole: 'Project Manager' },
  { id: 17, name: 'Charlotte Hill', year: 2017, department: 'Biology', jobRole: 'Microbiologist' },
  { id: 18, name: 'Benjamin King', year: 2014, department: 'Economics', jobRole: 'Data Analyst' },
  { id: 19, name: 'Amelia Scott', year: 2016, department: 'Nursing', jobRole: 'Registered Nurse' },
  { id: 20, name: 'William Green', year: 2013, department: 'Political Science', jobRole: 'Policy Advisor' },
  { id: 21, name: 'Harper Adams', year: 2018, department: 'Environmental Engineering', jobRole: 'Environmental Consultant' },
  { id: 22, name: 'Liam Baker', year: 2015, department: 'Computer Engineering', jobRole: 'Hardware Engineer' },
  { id: 23, name: 'Evelyn Ross', year: 2019, department: 'Mathematics', jobRole: 'Data Scientist' },
  { id: 24, name: 'Lucas Cook', year: 2012, department: 'Chemistry', jobRole: 'Analytical Chemist' },
  { id: 25, name: 'Sofia Murphy', year: 2020, department: 'International Relations', jobRole: 'Foreign Affairs Analyst' },
  { id: 26, name: 'Henry Ward', year: 2011, department: 'Aerospace Engineering', jobRole: 'Aerospace Engineer' },
  { id: 27, name: 'Scarlett Foster', year: 2017, department: 'Human Resources', jobRole: 'HR Manager' },
  { id: 28, name: 'Jackson Powell', year: 2014, department: 'Information Technology', jobRole: 'IT Consultant' },
  { id: 29, name: 'Grace Hughes', year: 2016, department: 'Sociology', jobRole: 'Social Researcher' },
  { id: 30, name: 'Aiden Butler', year: 2013, department: 'Mechanical Engineering', jobRole: 'Robotics Engineer' },
  { id: 31, name: 'Chloe Simmons', year: 2018, department: 'Psychology', jobRole: 'Organizational Psychologist' },
  { id: 32, name: 'Owen Price', year: 2015, department: 'Electrical Engineering', jobRole: 'Systems Engineer' },
  { id: 33, name: 'Zoey Long', year: 2019, department: 'Marketing', jobRole: 'Digital Marketing Specialist' },
  { id: 34, name: 'Gabriel Stewart', year: 2012, department: 'Computer Science', jobRole: 'Cybersecurity Analyst' },
  { id: 35, name: 'Penelope Morris', year: 2020, department: 'Business Administration', jobRole: 'Management Trainee' },
  { id: 36, name: 'Carter Reed', year: 2011, department: 'Biomedical Engineering', jobRole: 'Medical Device Engineer' },
  { id: 37, name: 'Layla Coleman', year: 2017, department: 'Environmental Science', jobRole: 'Sustainability Coordinator' },
  { id: 38, name: 'Julian Cox', year: 2014, department: 'Finance', jobRole: 'Financial Planner' },
  { id: 39, name: 'Madelyn Howard', year: 2016, department: 'Chemical Engineering', jobRole: 'Quality Control Engineer' },
  { id: 40, name: 'Christopher Wood', year: 2013, department: 'Artificial Intelligence', jobRole: 'Machine Learning Engineer' },
  { id: 41, name: 'Aubrey Barnes', year: 2018, department: 'Civil Engineering', jobRole: 'Structural Engineer' },
  { id: 42, name: 'Eli Richardson', year: 2015, department: 'Physics', jobRole: 'Quantum Physicist' },
  { id: 43, name: 'Savannah Kelly', year: 2019, department: 'Graphic Design', jobRole: 'Art Director' },
  { id: 44, name: 'Dominic Perry', year: 2012, department: 'Mechanical Engineering', jobRole: 'Automotive Engineer' },
  { id: 45, name: 'Skylar Cooper', year: 2020, department: 'Computer Engineering', jobRole: 'IoT Developer' },
  { id: 46, name: 'Parker Peterson', year: 2011, department: 'Economics', jobRole: 'Economic Consultant' },
  { id: 47, name: 'Paisley Gray', year: 2017, department: 'Biotechnology', jobRole: 'Bioinformatics Specialist' },
  { id: 48, name: 'Kayden Harrison', year: 2014, department: 'Information Systems', jobRole: 'Business Analyst' },
  { id: 49, name: 'Nora Mitchell', year: 2016, department: 'Electrical Engineering', jobRole: 'Power Systems Engineer' },
  { id: 50, name: 'Xavier Carter', year: 2013, department: 'Computer Science', jobRole: 'Full Stack Developer' },
];

const Alumni = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Our Distinguished Alumni</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {topAlumni.map((alum) => (
          <div key={alum.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={alum.image} alt={alum.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{alum.name}</h2>
            <p className="text-gray-600 mb-1">Class of {alum.year}</p>
            <p className="text-gray-600 mb-1">{alum.department}</p>
            <p className="text-gray-600 mb-2">{alum.jobRole} at {alum.company}</p>
            <p className="text-sm italic mb-4">{alum.achievement}</p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300">
                <Linkedin size={16} className="mr-1" /> Connect
              </button>
              <button className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300">
                <Mail size={16} className="mr-1" /> Email
              </button>
              <button className="flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300">
                <Video size={16} className="mr-1" /> Meet
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">More Alumni</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {otherAlumni.map((alum) => (
          <div key={alum.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-1">{alum.name}</h3>
            <p className="text-gray-600 text-sm mb-1">Class of {alum.year}</p>
            <p className="text-gray-600 text-sm mb-2">{alum.department}</p>
            <p className="text-gray-600 text-sm mb-3">{alum.jobRole}</p>
            <div className="flex justify-start space-x-2">
              <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600 transition duration-300">
                <Linkedin size={14} className="mr-1" /> Connect
              </button>
              <button className="flex items-center bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition duration-300">
                <Mail size={14} className="mr-1" /> Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;