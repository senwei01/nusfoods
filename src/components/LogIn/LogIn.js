import styles from "./LogIn.module.css";
import placeholder from "../../assets/log-in-placeholder.png";

const LogIn = () => {
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

export default LogIn;
