import { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [trending, setTrending] = useState([]);
  const [categories, setCategories] = useState([]);
  const [romance, setRomance] = useState([]);
  const [horror, setHorror] = useState([]);
  const [action, setAction] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);

  console.log(trending);

  const getTrending = () => {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((json) => {
        setTrending(json.data);
      });
  };

  const getCategories = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=adventure")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json.data);
      });
  };

  const getTrendingManga = () => {
    fetch("https://kitsu.io/api/edge/manga")
      .then((res) => res.json())
      .then((json) => {
        setTrendingManga(json.data);
      });
  };

  const getAction = () => {
    fetch("https://kitsu.io/api/edge/manga?filter[categories]=action")
      .then((res) => res.json())
      .then((json) => {
        setAction(json.data);
      });
  };

  const getRomance = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=romance")
      .then((res) => res.json())
      .then((json) => {
        setRomance(json.data);
      });
  };

  const getHorror = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=horror")
      .then((res) => res.json())
      .then((json) => {
        setHorror(json.data);
      });
  };

  useEffect(() => {
    getTrending();
    getCategories();
    getRomance();
    getHorror();
    getAction();
    getTrendingManga();
  }, []);
  return (
    <div className="home-page">
      <Carousel
        className="carousel"
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="true"
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        {trending.map((anime) => (
               <Link
               key={anime.id}
               to={{
                 pathname: `/anime/${anime.id}`,
                 search: `?title=${anime.attributes.canonicalTitle}&description=${anime.attributes.description}&image=${anime.attributes.posterImage.original}`
               }}
               className='card-link'
             > <div key={anime.id} className="trending-anime">
            <img
              src={anime.attributes.coverImage.large}
              alt={anime.attributes.canonicalTitle}
            />
            <div className="description">
              <h2 className="title">{anime.attributes.canonicalTitle}</h2>
              <p className="ep-count">
                Episodes: {anime.attributes.episodeCount}
              </p>
              <p className="rating">Rating: {anime.attributes.averageRating}</p>
            </div>
          </div>
              
             </Link>
         
        ))}
      </Carousel>
      <div className="home-content">
        <p className="section-title">Action:</p>
        <div className="anime-list">
          {action.map((item) => (
                 <Link
                 key={item.id}
                 to={{
                   pathname: `/${item.type}`,
                   search: `?title=${item.attributes.canonicalTitle}&description=${item.attributes.description}&image=${item.attributes.posterImage.original}`
                 }}
                 className='card-link'
               >
                 <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
               </Link>
           
          ))}
        </div>
        <p className="section-title">Adventure:</p>
        <div className="anime-list">
          {categories.map((item) => (
              <Link
              key={item.id}
              to={{
                pathname: `/${item.type}`,
                search: `?title=${item.attributes.canonicalTitle}&description=${item.attributes.description}&image=${item.attributes.posterImage.original}`
              }}
              className='card-link'
            >
              <div key={item.id} className="item">
           <img
             src={item.attributes.posterImage.large}
             alt={item.attributes.canonicalTitle}
           />
           <div className="description">
             <p className="title">{item.attributes.canonicalTitle}</p>
           </div>
         </div>
            </Link>
          ))}
        </div>
        <p className="section-title">Romance:</p>
        <div className="anime-list">
          {romance.map((item) => (
                 <Link
                 key={item.id}
                 to={{
                   pathname: `/${item.type}`,
                   search: `?title=${item.attributes.canonicalTitle}&description=${item.attributes.description}&image=${item.attributes.posterImage.original}`
                 }}
                 className='card-link'
               >
                 <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
               </Link>
          ))}
        </div>
        <p className="section-title">Horror:</p>
        <div className="anime-list">
          {horror.map((item) => (
                 <Link
                 key={item.id}
                 to={{
                  pathname: `/${item.type}`,
                   search: `?title=${item.attributes.canonicalTitle}&description=${item.attributes.description}&image=${item.attributes.posterImage.original}`
                 }}
                 className='card-link'
               >
                 <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
               </Link>
          ))}
        </div>
        <p className="section-title">Trending Manga:</p>
        <div className="anime-list">
          {trendingManga.map((item) => (
                 <Link
                 key={item.id}
                 to={{
                  pathname: `/${item.type}`,
                   search: `?title=${item.attributes.canonicalTitle}&description=${item.attributes.description}&image=${item.attributes.posterImage.original}`
                 }}
                 className='card-link'
               >
                 <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
               </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;