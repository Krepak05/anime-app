import { useState,useEffect } from 'react';
import axios from 'axios';
import './index.scss'

function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Number of anime to fetch per request

  useEffect(() => {
    // Function to fetch anime by genre and sort by popularity
    const fetchAnimeByGenre = async () => {
      try {
        const response = await axios.get(
          'https://kitsu.io/api/edge/anime',
          {
            params: {
              'filter[genres]': "action", // Sortiranje po Zanru
              'sort': 'popularityRank', // Sortiranje po popularnosti
              'page[offset]': offset, // Broj anime/mangi po stranici
            },
          }
        );

       console.log(response.data.data) ;
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };

    fetchAnimeByGenre();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };
  return (
    <>
 <h1>Anime</h1>
    </>
  )
}

export default AnimePage;
