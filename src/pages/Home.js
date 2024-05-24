import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
    const [profile, setProfile] = useState({
        profilePic: '',
        banner: '',
        name: '',
        school: '',
        graduationYear: '',
        bio: '',
        major: '',
        pronouns: '',
        favoriteCoffee: '',
        coursework: '',
        watched: '',
        read: '',
        listened: ''
    });

    useEffect(() => {
        const storedProfile = localStorage.getItem('userProfile');
        if (storedProfile) {
            setProfile(JSON.parse(storedProfile));
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        localStorage.setItem('userProfile', JSON.stringify(profile));
    };

    return (
        <div className="profile-container">
            <button onClick={handleSave} className="gear-button">G</button>
            <div className="profile-banner">
                <img src={profile.banner} className="banner-image" alt="Banner"/>
                <img src={profile.profilePic} className="profile-picture" alt="Profile"/>
            </div>
            <div className="profile-info">
                <h1>{profile.name}</h1>
                <h2>{profile.school}, {profile.graduationYear}</h2>
                <p>{profile.bio}</p>
            </div>
            <div className="profile-details">
                <div>{profile.major}</div>
                <div>{profile.pronouns}</div>
                <div>{profile.favoriteCoffee}</div>
            </div>
            <div className="profile-coursework">
                <div>{profile.coursework}</div>
            </div>
            <div className="profile-media">
                <div>Watched: {profile.watched}</div>
                <div>Read: {profile.read}</div>
                <div>Listened: {profile.listened}</div>
            </div>
        </div>
    );
}

export default Home;
