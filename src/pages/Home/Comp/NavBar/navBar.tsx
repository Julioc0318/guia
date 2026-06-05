import styles from "./navBar.module.less";
import Logo from "@/assets/goSalamanca2.svg";
import { useNavigateLink } from "@/hooks";

export const NavBar = () => {
  const { onJump } = useNavigateLink();

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.navButtons}>
        <div className={styles.navButton} onClick={() => onJump("/introduce")}>
          INTRODUCE
        </div>
        <div className={styles.navButton} onClick={() => onJump("/guide")}>
          GUIDE
        </div>
        <div className={styles.navButton} onClick={() => onJump("/contact")}>
          CONTACT
        </div>
      </div>
    </div>
  );
};
