import Navbar from "../shared/components/Navbar/Navbar";
import Tracks from "./components/Tracks";
import styles from "./Home.module.css"

export const HomePage = () => {

  return (
    <main className={styles.main}>
        <Navbar/>
        <Tracks/>
    </main>
  )
}
