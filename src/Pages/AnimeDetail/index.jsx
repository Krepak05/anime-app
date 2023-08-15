import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { useLocation, useParams } from "react-router-dom";
import { appContext } from "../../Context";

function AnimeDetailPage() {
  const { favouriteAnime, setFavouriteAnime } = useContext(appContext);
  const location = useLocation();
  const params = useParams();
  const title = new URLSearchParams(location.search).get("title");
  const description = new URLSearchParams(location.search).get("description");
  const image = new URLSearchParams(location.search).get("image");

  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const isAlreadyAdded = favouriteAnime.some(
      (anime) => anime.title === title
    );
    setIsInFavorites(isAlreadyAdded);
  }, [favouriteAnime, title]);

  const handleAddToFavorites = () => {
    const animeDetails = {
      title: title,
      description: description,
      image: image,
    };

    if (isInFavorites) {
      const updatedFavorites = favouriteAnime.filter(
        (anime) => anime.title !== title
      );

      setFavouriteAnime(updatedFavorites);
      setIsInFavorites(false);
    } else {
      const updatedFavorites = [...favouriteAnime, animeDetails];

      setFavouriteAnime(updatedFavorites);
      setIsInFavorites(true);
    }
  };

  return (
    <div className="anime-detail-container">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <img src={image} alt={title} />
        <div className="desc">
          <p>{description}</p>
          <button onClick={handleAddToFavorites}>
            {isInFavorites ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetailPage;
