import { useState, useEffect } from "react";
import useSWR from "swr";
import { getSpotify } from "../../services/spotify.services";
import styles from "./Tracks.module.css";

const Tracks = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("Crush 40");
  }, []);

  const fetcher = () => getSpotify(query);

  const { data: spotify } = useSWR(`/search/?q=${query}&type=tracks&offset=0&limit=10&numberOfTopResults=5`, fetcher);

  return (
    <div className={styles.container}>
      {spotify?.tracks.items.map((track) =>(
        <div key={track.data.id} className={styles.track}>
          <figure className={styles.track_cover}>
            <img src={track.data.albumOfTrack.coverArt.sources[0].url}/>
          </figure>
          <div className={styles.track_data}>
            <h2>{track.data.name}</h2>
            <label> Artist:
              <span>
                {track.data.artists.items.map((artist) =>(
                  <h3 key={artist.uri}>{artist.profile.name}</h3>
                ))}
              </span>
              
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracks;
