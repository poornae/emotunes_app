const fetchSongsByEmotion = async (emotion) => {
    try {
      const response = await axios.get(`http://localhost:5000/songs/${emotion}`);
      setSongs(response.data);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };
  