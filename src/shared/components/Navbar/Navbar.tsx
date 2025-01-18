import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
    <div className={styles.logo}>
        <figure>
            <img src="https://res.cloudinary.com/dhqkospsd/image/upload/v1736989853/Kodigo%20Music/x8x4fmzwl1btrddchlqz.png" alt="kodigo logo"/>
        </figure>
        <div className={styles.logo_music}>
            <h1>Music</h1>
        </div>
    </div>

    <div className={styles.items}>
        <Link to="/">Tracks</Link>
        <Link to="/comment">Leave a comment</Link>
    </div>
</nav>

  )
}

export default Navbar