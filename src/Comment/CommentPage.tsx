import Footer from "../shared/components/Footer/Footer";
import Navbar from "../shared/components/Navbar/Navbar";
import styles from "./CommentPage.module.css";
import NewComment from "./components/newComment/NewComment";

export const CommentPage = () => {
  return (
    <main className={styles.main}>
        <Navbar/>
        <NewComment/>
        <Footer/>
    </main>
  )
}
