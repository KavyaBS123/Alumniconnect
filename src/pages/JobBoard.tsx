import React, { useState } from 'react';

const JobBoard = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'San Francisco, CA' },
    { id: 2, title: 'Marketing Manager', company: 'Brand Inc', location: 'New York, NY' },
    { id: 3, title: 'Data Analyst', company: 'Data Corp', location: 'Chicago, IL' },
  ]);

  const [newJob, setNewJob] = useState({ title: '', company: '', location: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setNewJob({ title: '', company: '', location: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Job Board</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Job Title"
            className="w-full p-2 mb-4 border rounded"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-2 mb-4 border rounded"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 mb-4 border rounded"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            required
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
            Post Job
          </button>
        </form>
      </div>
      <div className="grid gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-1">Company: {job.company}</p>
            <p className="text-gray-600 mb-2">Location: {job.location}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;