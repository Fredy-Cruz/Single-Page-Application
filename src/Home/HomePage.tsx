import Footer from "../shared/components/Footer/Footer";
import Navbar from "../shared/components/Navbar/Navbar";
import Tracks from "./components/Tracks";
import styles from "./HomePage.module.css"

export const HomePage = () => {

  return (
    <main className={styles.main}>
        <Navbar/>
        <Tracks/>
        <Footer/>
    </main>
  )
}
