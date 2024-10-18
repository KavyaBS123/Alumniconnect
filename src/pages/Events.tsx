import React from 'react';

const Events = () => {
  const events = [
    { id: 1, title: 'Annual Alumni Reunion', date: '2024-07-15', location: 'University Campus' },
    { id: 2, title: 'Career Development Workshop', date: '2024-08-22', location: 'Online Webinar' },
    { id: 3, title: 'Networking Mixer', date: '2024-09-10', location: 'Downtown Conference Center' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">Date: {event.date}</p>
            <p className="text-gray-600 mb-4">Location: {event.location}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;