import React, { useState, useEffect } from 'react';
import './Home.css';
import supabase from "../services/supabase";

function Home() {
    const [profiles, setProfiles] = useState([]); // Stores all profiles for dropdown
    const [selectedUserId, setSelectedUserId] = useState(''); // Currently selected user ID
    const [profileDetails, setProfileDetails] = useState(null); // Details of the selected profile

    // Fetch all profiles to populate the dropdown
    useEffect(() => {
        async function fetchProfiles() {
            const { data, error } = await supabase
                .from('profiles')
                .select('user_id, name'); // Select both user_id and name
            if (error) {
                console.error('Error fetching profiles', error);
            } else {
                setProfiles(data);
            }
        }

        fetchProfiles();
    }, []);

    // Fetch details of the selected profile
    useEffect(() => {
        async function fetchProfileDetails() {
            if (selectedUserId) {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('user_id', selectedUserId)
                    .single();

                if (error) {
                    console.error('Error fetching profile details', error);
                    setProfileDetails(null);
                } else {
                    setProfileDetails(data);
                }
            }
        }

        fetchProfileDetails();
    }, [selectedUserId]);

    return (
        <div className="profile-container">
            <select
                value={selectedUserId}
                onChange={e => setSelectedUserId(e.target.value)}
                className="user-select"
            >
                <option value="">Choose a user...</option>
                {profiles.map(profile => (
                    <option key={profile.user_id} value={profile.user_id}>
                        {profile.name || `User ${profile.user_id}`}
                    </option>
                ))}
            </select>

            {profileDetails && (
                <div className="profile-details">
                    <img src={profileDetails.profile_picture_url} alt="Profile" className="profile-picture"/>
                    <img src={profileDetails.banner_url} alt="Banner" className="profile-banner"/>
                    <p><strong>Name:</strong> {profileDetails.name}</p>
                    <p><strong>Bio:</strong> {profileDetails.bio}</p>
                    <p><strong>Favorite Book:</strong> {profileDetails.favorite_book}</p>
                </div>
            )}
        </div>
    );
}

export default Home;
