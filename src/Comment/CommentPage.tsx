import Navbar from "../shared/components/Navbar/Navbar"
import styles from "./CommentPage.module.css"
import NewComment from "./components/newComment/newComment"

export const CommentPage = () => {
  return (
    <main className={styles.main}>
        <Navbar/>
        <NewComment/>
    </main>
  )
}
