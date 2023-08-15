import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimeInfo = () => {
  const [animeData, setAnimeData] = useState([]);

  const fetchAnimeData = async () => {
    try {
      const response = await axios.get('https://api.anime-app.com/anime');
      setAnimeData(response.data);
    } catch (error) {
      console.error('Greška pri dohvatanju podataka o animeima:', error);
    }
  };

  useEffect(() => {
    fetchAnimeData();
  }, []);

  return (
    <div>
      <h2>Informacije o animeima</h2>
      <ul>
        {animeData.map((anime) => (
          <li key={anime.id}>
            {anime.title} - {anime.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeInfo;
