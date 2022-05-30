import styles from "./Home.module.css";
import placeholder from "../../assets/forum-placeholder.png";

const Forum = () => {
  return (
    <div>
      <img src={placeholder} alt="Forum" className={styles.Center}></img>
    </div>
  );
};

export default Forum;
