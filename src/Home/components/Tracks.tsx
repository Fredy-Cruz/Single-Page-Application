import React, { useState } from "react";
import useSWR from "swr";
import { getSpotify } from "../../services/spotify.services";
import styles from "./Tracks.module.css";
import Loader from "../../shared/components/Loading/Loader";
import { Link } from "react-router";
import PlayButton from "../../shared/components/PlayButton/PlayButton";

const Tracks = () => {
  // useState para definir la búsqueda del usuario
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(""); // Estado adicional para la búsqueda activa

  // fetcher para llamar el servicio de Spotify
  const fetcher = () => getSpotify(search);

  // SWR para manejar API
  const { data: spotify, isLoading } = useSWR(
    `/search/?q=${search}&type=tracks&offset=0&limit=10&numberOfTopResults=5`,
    fetcher
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearch(query); // Actualiza la búsqueda activa
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          Search
        </button>
      </div>

      {isLoading && <Loader />}

      {spotify?.tracks.items.map((track) => (
        <Link
          key={track.data.id}
          to={`/${track.data.id}`}
          state={{ track: track.data }}
        >
          <div className={styles.track}>
            <figure className={styles.track_cover}>
              <img
                src={track.data.albumOfTrack.coverArt.sources[0].url}
                alt={track.data.name}
              />
            </figure>
            <div className={styles.track_data}>
              <h2>{track.data.name}</h2>
              <label>
                Artist:
                <span>
                  {track.data.artists.items.map((artist) => (
                    <h3 key={artist.uri}>{artist.profile.name}</h3>
                  ))}
                </span>
              </label>
            </div>
            <div className={styles.play}>
              <PlayButton track={track.data} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tracks;
