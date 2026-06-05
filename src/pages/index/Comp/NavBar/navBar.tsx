import { Link } from "react-router-dom";
import styles from "./navBar.module.less";
import Logo from "@/assets/goSalamanca2.svg";

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.navButtons}>
        <div className={styles.navButton}>
          <Link to="/introduce">INTRODUCE</Link>
        </div>
        <div className={styles.navButton}>
          <Link to="/guide">GUIDE</Link>
        </div>
        <div className={styles.navButton}>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};
