import React, { useState } from 'react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const alumni = [
    { id: 1, name: 'John Doe', graduationYear: 2020, major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', graduationYear: 2019, major: 'Business Administration' },
    { id: 3, name: 'Mike Johnson', graduationYear: 2021, major: 'Electrical Engineering' },
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;