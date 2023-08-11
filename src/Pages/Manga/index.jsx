import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function MangaPage() {
  const [mangaList, setMangaList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [uniqueMangaIds, setUniqueMangaIds] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const defaultCategory = "action";

  const limit = 10;
  const threshold = 200;

  useEffect(() => {
    const fetchMangaByCategory = async () => {
      try {
        setIsLoading(true); // Set loading state when fetching data

        const categoryToFetch = selectedCategory || defaultCategory;
        const response = await axios.get(
          `https://kitsu.io/api/edge/manga?filter[categories]=${categoryToFetch}&sort=popularityRank&page[offset]=${offset}`
        );

        const filteredMangaList = searchInput
          ? response.data.data.filter((manga) =>
              manga.attributes.canonicalTitle
                .toLowerCase()
                .startsWith(searchInput.toLowerCase())
            )
          : response.data.data;

        const newMangaList = filteredMangaList.filter(
          (manga) => !uniqueMangaIds.has(manga.id)
        );
        setMangaList((prevMangaList) => [...prevMangaList, ...newMangaList]);
        newMangaList.forEach((manga) => uniqueMangaIds.add(manga.id));
        setIsLoading(false); // Content fetched, loading is done
      } catch (error) {
        console.error("Error fetching manga:", error);
      }
    };

    fetchMangaByCategory();
  }, [selectedCategory, offset, searchInput, uniqueMangaIds]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setOffset(0);
    setMangaList([]);
    setUniqueMangaIds(new Set());
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setOffset(0);
    setMangaList([]);
    setUniqueMangaIds(new Set());
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - threshold
    ) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="manga-full-page">
        <div className="upper">
          <div className="list">
            <select name="Choose a category" onChange={handleCategoryChange}>
              <option value="">Choose a category</option>
              <option value="adventure">Adventure</option>
              <option value="action">Action</option>
              <option value="fantasy">Fantasy</option>
              <option value="crime">Crime</option>
              <option value="drama">Drama</option>
              <option value="romance">Romance</option>
              <option value="supernatural">Supernatural</option>
              <option value="magic">Magic</option>
              <option value="horor">Horor</option>
            </select>
          </div>
          <div className="filter">
            <label>
              <AiOutlineSearch />
              <input
                type="text"
                className="search"
                placeholder="Search"
                value={searchInput}
                onChange={handleSearchChange}
              />
            </label>
          </div>
        </div>

        <div className="cards">
          {isLoading ? (
            <div className="bouncing-loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            mangaList.map((manga) => (
              <Link
                key={manga.id}
                to={`/manga/${manga.id}`}
                className="card-link"
              >
                <div className="card">
                  <img
                    src={manga.attributes.posterImage.original}
                    alt={manga.attributes.canonicalTitle}
                  />
                  <div className="desc">
                    <p className="title">{manga.attributes.canonicalTitle}</p>
                    <p className="click">Click to see more</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default MangaPage;
