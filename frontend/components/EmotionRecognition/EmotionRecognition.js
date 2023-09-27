import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import YouTube from 'react-youtube';

function EmotionRecognitionPage({ user }) {
  const [emotion, setEmotion] = useState('');
  const [recommendedSongs, setRecommendedSongs] = useState([]);
  const webcamRef = React.useRef(null);

  const captureFacialExpression = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      // Implement your facial emotion recognition logic here
      
      // Simulate fetching recommended songs (replace with your API call)
      try {
        const response = await axios.post('/api/recommendations', { emotion });
        setRecommendedSongs(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    }
  };

  useEffect(() => {
    // You can start capturing facial expressions here periodically
  }, []);

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>

      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          mirrored={true} // Adjust as needed
        />
      </div>

      <div className="emotion-display">
        <h2>Detected Emotion: {emotion}</h2>
      </div>

      <div className="recommended-songs">
        <h2>Recommended Songs</h2>
        <ul>
          {recommendedSongs.map((song, index) => (
            <li key={index}>
              <strong>{song.songName}</strong> by {song.artist}
              <div>
                <YouTube videoId={song.videoId} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EmotionRecognitionPage;
