import styles from "./Home.module.css";
import placeholder from "../../assets/home-placeholder.png";

const Home = () => {
  return (
    <div>
      <img
        src={placeholder}
        alt="Please Log In"
        className={styles.Center}
      ></img>
    </div>
  );
};

export default Home;
