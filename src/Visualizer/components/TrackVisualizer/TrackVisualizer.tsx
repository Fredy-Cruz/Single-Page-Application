import React from "react";
import { HilariousData } from "../../../interfaces/spotify.interfaces";
import styles from "./TrackVisualizer.module.css"
import TrackName from "../TrackName/TrackName";
import PlayButton from "../../../shared/components/PlayButton/PlayButton";

//Interfaz para el prop
interface Props {
  track: HilariousData;
}

const TrackVisualizer: React.FC<Props> = ({track}) => {

  //Constantes para dar formato a la duracion
  const minutes:number = Math.floor(track.duration.totalMilliseconds / 60000); 
  const seconds:number = Math.floor((track.duration.totalMilliseconds % 60000) / 1000); 

  // Formatear para agregar un "0" si es necesario
  const formattedTime = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return (
    
    <div className={styles.container}>
      <TrackName name={track.name}/>
      <figure>
        <img src={track.albumOfTrack.coverArt.sources[2].url} alt={track.name}/>
      </figure>
      <label>Artist:
          {track.artists.items.map((artist) => (
            <h3 key={artist.uri}>{artist.profile.name}</h3>
          ))}
      </label>
      <label>
        Album: 
        <h3>{track.albumOfTrack.name}</h3>
      </label>
      <label>Duration:
        <h3> {formattedTime} mins</h3>
      </label>
      <PlayButton track={track}/>
    </div>
  )
}

export default TrackVisualizer