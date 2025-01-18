import { useLocation, useNavigate } from "react-router";
import Navbar from "../shared/components/Navbar/Navbar";
import styles from "./VisualizerPage.module.css";

export const VisualizerPage = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { track } = location.state || {};

  return (
    <main className={styles.main}>
      <Navbar />

      <div>
        <h1>{track.name}</h1>
        <p>Album: {track.albumOfTrack.name}</p>
        <p>Duration: {track.duration.totalMilliseconds} ms</p>
        <img
          src={track.albumOfTrack.coverArt.sources[0].url}
          alt={track.name}
        />
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </main>
  );
};
