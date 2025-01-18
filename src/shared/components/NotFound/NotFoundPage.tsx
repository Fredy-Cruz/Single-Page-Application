import { Link } from "react-router"
import Navbar from "../Navbar/Navbar"
import styles from "./NotFoundPage.module.css"

export const NotFoundPage = () => {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.text}>404: Page not Found</div>
            <Link to="/" className={styles.button}>Back to Home</Link>
        </div>
    </>
  )
}
