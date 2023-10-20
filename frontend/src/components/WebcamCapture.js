import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './WebcamCapture.css';

function WebcamCapture({ setCapturedImage, setEmotion }) {
    const webcamRef = useRef(null);
    const [captureButtonText, setCaptureButtonText] = useState('Capture');

    const capture = () => {
        setCaptureButtonText('Capturing...');
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);

        // TODO: Send this imageSrc to backend for emotion analysis
        // For now, we'll mock an emotion being set
        setTimeout(() => {
            setEmotion('Happy');  // Mocked emotion
            setCaptureButtonText('Capture Again');
        }, 1000);
    };

    return (
        <div className="webcam-container">
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={320}
                height={240}
            />
            <button onClick={capture} className="capture-button">{captureButtonText}</button>
        </div>
    );
}

export default WebcamCapture;
