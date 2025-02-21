import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Profile = () => {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Profile</h1>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-content">
        {isEditing ? (
          <form className="profile-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" defaultValue={user?.name} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue={user?.email} />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        ) : (
          <div className="profile-info">
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile; 