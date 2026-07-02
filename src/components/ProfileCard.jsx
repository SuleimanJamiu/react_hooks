import { useEffect, useState } from 'react';

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({
        name: 'Suleiman Jamiu',
        email: 'suleiman_J@example.com',
        city: 'Lagos',
      });
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="profile-card">
      <h2>Profile Loader</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>City:</strong> {profile.city}</p>
        </div>
      )}
    </section>
  );
}

export default ProfileCard;
