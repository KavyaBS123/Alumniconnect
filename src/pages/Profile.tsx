import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    graduationYear: 2020,
    major: 'Computer Science',
    email: 'john.doe@example.com',
    bio: 'Passionate software developer with a keen interest in AI and machine learning.',
    achievements: [
      { id: 1, title: 'First Place in Hackathon 2019', description: 'Led a team to victory in the annual coding competition.' },
      { id: 2, title: 'Published Research Paper', description: 'Co-authored a paper on machine learning algorithms in ICML 2021.' },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically send the updated profile to a backend server
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          {/* ... (previous form fields) */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              className="w-full p-2 border rounded"
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Save Changes
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{profile.name}</h2>
          <p className="mb-2"><strong>Graduation Year:</strong> {profile.graduationYear}</p>
          <p className="mb-2"><strong>Major:</strong> {profile.major}</p>
          <p className="mb-2"><strong>Email:</strong> {profile.email}</p>
          <p className="mb-4"><strong>Bio:</strong> {profile.bio}</p>
          <h3 className="text-xl font-semibold mb-2">Achievements</h3>
          <ul className="list-disc pl-5 mb-4">
            {profile.achievements.map((achievement) => (
              <li key={achievement.id} className="mb-2">
                <strong>{achievement.title}</strong>: {achievement.description}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;