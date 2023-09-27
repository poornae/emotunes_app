import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import LoginPage from './components/LoginPage';
// import RegistrationPage from './components/RegistrationPage';
// import EmotionDetector from './frontend/components/EmotionDetector/EmotionDetector';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <h1>EmoTunes</h1>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title} by {song.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
