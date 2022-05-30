import styles from "./Deals.module.css";
import placeholder from "../../assets/deals-placeholder.png";

const Deals = () => {
  return (
    <div>
      <img src={placeholder} alt="Deals" className={styles.Center}></img>
    </div>
  );
};

export default Deals;
