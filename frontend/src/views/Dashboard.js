import React, { useState, useEffect } from 'react';
import WebcamCapture from '../components/WebcamCapture.js';
import ProfileSidebar from './components/ProfileSidebar.js';
import '../styles/Dashboard.css';

function Dashboard() {
    const [capturedImage, setCapturedImage] = useState(null);
    const [emotion, setEmotion] = useState('');
    const [songs, setSongs] = useState([]);

    // TODO: Integrate with your machine learning model to determine emotion

    const songRecommendations = {
        Angry: ["Song1 for Angry", "Song2 for Angry", "Song3 for Angry"],
        Sad: ["Song1 for Sad", "Song2 for Sad", "Song3 for Sad"],
        Shocked: ["Song1 for Shocked", "Song2 for Shocked", "Song3 for Shocked"],
        Happy: ["Song1 for Happy", "Song2 for Happy", "Song3 for Happy"],
        Stressed: ["Song1 for Stressed", "Song2 for Stressed", "Song3 for Stressed"]
    };

    useEffect(() => {
        if (emotion) {
            setSongs(songRecommendations[emotion]);
        }
    }, [emotion]);

    return (
        <div className="dashboard-container">
            <ProfileSidebar />
            <div className="content">
                <WebcamCapture setCapturedImage={setCapturedImage} setEmotion={setEmotion} />
                {capturedImage && <img src={capturedImage} alt="Captured emotion" />}
                <h2>Recommended Songs for {emotion}</h2>
                <ul>
                    {songs.map(song => <li key={song}>{song}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
