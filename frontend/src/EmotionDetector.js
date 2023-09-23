import React, { useEffect } from 'react';
import * as faceapi from 'face-api.js';

function EmotionDetector() {
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.nets.faceExpressionNet.loadFromUri('/models');
    };
    loadModels();
  }, []);

  const handleImageUpload = async (event) => {
    const img = document.getElementById('inputImage');
    const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
    // Here you can get the emotion with the highest score from detections and proceed with your song recommendation logic
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} id="inputImage" />
    </div>
  );
}

export default EmotionDetector;
