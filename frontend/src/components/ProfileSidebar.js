import React, { useState, useEffect } from 'react';
import './ProfileSidebar.css';

function ProfileSidebar({ userId }) {
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    // Mock fetching user data for the demonstration. In a real-world scenario, fetch from the backend.
    useEffect(() => {
        setUserData({
            name: 'John Doe',
            email: 'john@example.com'
        });
    }, [userId]);

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleSaveProfile = () => {
        // TODO: Send updated data to the backend for saving.
        setIsEditing(false);
    };

    return (
        <div className="profile-sidebar">
            <h2>Your Profile</h2>
            <div className="profile-content">
                {isEditing ? (
                    <>
                        <input type="text" defaultValue={userData.name} />
                        <input type="email" defaultValue={userData.email} />
                        <button onClick={handleSaveProfile} className="save-button">Save</button>
                    </>
                ) : (
                    <>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <button onClick={handleEditProfile} className="edit-button">Edit</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfileSidebar;
