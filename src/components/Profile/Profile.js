import styles from "./Profile.module.css";
import placeholder from "../../assets/profile-placeholder.png";

const Profile = () => {
  return (
    <div>
      <img src={placeholder} alt="Profile Page" className={styles.Center}></img>
    </div>
  );
};

export default Profile;
