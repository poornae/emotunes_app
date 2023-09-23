import React from 'react';
import axios from 'axios';

function App() {
  const fetchBackend = async () => {
    try {
      const response = await axios.get('http://localhost:5000');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  return (
    <div className="App">
      <h1>EmoTunes</h1>
      <button onClick={fetchBackend}>Test Backend</button>
    </div>
  );
}

export default App;
