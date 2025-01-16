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
        <a href="#home">Tracks</a>
        <a href="#home">Playlist</a>
        <a href="#services">About</a>
    </div>
</nav>

  )
}

export default Navbar