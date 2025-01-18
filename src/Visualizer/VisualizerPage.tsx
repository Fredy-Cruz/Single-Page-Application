import { useLocation } from "react-router";
import Navbar from "../shared/components/Navbar/Navbar";
import styles from "./VisualizerPage.module.css";
import { NotFoundPage } from "../shared/components/NotFound/NotFoundPage";
import { HilariousData } from "../interfaces/spotify.interfaces";
import TrackVisualizer from "./components/TrackVisualizer/TrackVisualizer";

interface LocationState {
    state: {
      track: HilariousData;
    };
  }
  

export const VisualizerPage = () => {
    
    const location = useLocation() as LocationState;
  
    const { track } = location.state || {};

  if (!track) {
    return (
      <NotFoundPage/>
    );
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <TrackVisualizer track={track}/>

    </main>
  );
};
