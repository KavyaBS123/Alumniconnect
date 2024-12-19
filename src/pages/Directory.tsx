import { Linkedin } from 'lucide-react';
import React, { useState } from 'react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const alumni = [
    { id: 1, 
      name: 'Pooja',
      graduationYear: 2020,
      major: 'Computer Science' ,
      Linkedin:'https://www.linkedin.com/in/pooja-m-9419b3259'
    },
    { id: 2,
     name: 'Manthan', 
     graduationYear: 2019, 
     major: 'Business Administration' ,
     Linkedin:'https://www.linkedin.com/in/2004manthan-s/'},
    { id: 3,
     name: 'Imthiyaz', 
     graduationYear: 2019, 
     major: 'Masters of Business Administration', 
      Linkedin:'https://www.linkedin.com/in/imthiyaz-k/' },
    { id: 4,
      name: 'Kirthi Keshav Madival', 
      graduationYear: 2021, 
      major: 'Electrical Engineering' ,
      Linkedin:'https://www.linkedin.com/in/kirthi-keshav-madival-1a009225a/'},
  ];

  const filteredAlumni = alumni.filter(
    (alum) =>
      alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.major.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Alumni Directory</h1>
      <input
        type="text"
        placeholder="Search by name or major"
        className="w-full p-2 mb-6 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-6">
        {filteredAlumni.map((alum) => (
          <div key={alum.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{alum.name}</h2>
            <p className="text-gray-600 mb-1">Graduation Year: {alum.graduationYear}</p>
            <p className="text-gray-600 mb-2">Major: {alum.major}</p>
            <a href={alum.Linkedin} target="_blank" rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
             Connect
            </a>
           
             
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;