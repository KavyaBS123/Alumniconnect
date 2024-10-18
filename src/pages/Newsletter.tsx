import React from 'react';

const newsletters = [
  {
    id: 1,
    title: 'Spring 2024 Alumni Newsletter',
    description: 'Catch up on the latest Oxford College of Engineering developments and alumni achievements.',
    date: 'March 15, 2024',
    link: '#',
  },
  {
    id: 2,
    title: 'Winter 2023 Research Spotlight',
    description: 'Highlighting groundbreaking research from our faculty and alumni.',
    date: 'December 1, 2023',
    link: '#',
  },
  {
    id: 3,
    title: 'Fall 2023 Career Connect',
    description: 'Exclusive job opportunities and career advice for our alumni network.',
    date: 'September 30, 2023',
    link: '#',
  },
];

const achievements = [
  {
    id: 1,
    title: 'National Science Award',
    description: 'Dr. Emily Chen (Class of 2010) received the prestigious National Science Award for her work in quantum computing.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Forbes 30 Under 30',
    description: 'Three of our recent Oxford College of Engineering graduates were named in the Forbes 30 Under 30 list for their innovative startup.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Olympic Gold Medal',
    description: 'Sarah Johnson (Class of 2018) won a gold medal in swimming at the recent Olympic Games.',
    image: 'https://images.unsplash.com/photo-1561841259-e29b0b8a32f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
];

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Oxford College of Engineering Newsletter & Achievements</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Latest Newsletters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter) => (
            <div key={newsletter.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{newsletter.title}</h3>
              <p className="text-gray-600 mb-2">{newsletter.description}</p>
              <p className="text-sm text-gray-500 mb-4">{newsletter.date}</p>
              <a href={newsletter.link} className="text-blue-500 hover:underline">Read More</a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Newsletter;