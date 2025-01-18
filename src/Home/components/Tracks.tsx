import React, { useState } from "react";
import useSWR from "swr";
import { getSpotify } from "../../services/spotify.services";
import styles from "./Tracks.module.css";
import Loader from "../../shared/components/Loading/Loader";
import { Link } from "react-router";
import PlayButton from "../../shared/components/PlayButton/PlayButton";

const Tracks = () => {
  const [query, setQuery] = useState("");

  const fetcher = () => getSpotify(query);

  const { data: spotify, isLoading } = useSWR(`/search/?q=${query}&type=tracks&offset=0&limit=10&numberOfTopResults=5`, fetcher);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); 
  };

  return (
    <div className={styles.container}>

      <input type="text" value={query} onChange={handleChange} placeholder="Search..." className={styles.search}/>

      {
        isLoading && <Loader/>
      }

      {spotify?.tracks.items.map((track) =>(
        <Link
        key={track.data.id}
        to={`/${track.data.id}`}
        state={{ track: track.data}}
      >
        <div className={styles.track}>
          <figure className={styles.track_cover}>
            <img src={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.name} />
          </figure>
          <div className={styles.track_data}>
            <h2>{track.data.name}</h2>
            <label> Artist:
              <span>
                {track.data.artists.items.map((artist) => (
                  <h3 key={artist.uri}>{artist.profile.name}</h3>
                ))}
              </span>
            </label>
          </div>
          <div className={styles.play}>
            <PlayButton track={track.data}/>
          </div>
        </div>
      </Link>
      
      ))}
    </div>
  );
};

export default Tracks;
