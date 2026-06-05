import styles from "./navBar.module.less";
import Logo from "@/assets/goSalamanca2.svg";
import { useNavigateLink } from "@/hooks";
import { useMemo } from "react";

export const NavBar = () => {
  const { onJump } = useNavigateLink();
  const Content = useMemo(
    () => (
      <>
        <div className={styles.logo} onClick={()=> onJump('/')}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.navButtons}>
          <div
            className={styles.navButton}
            onClick={() => onJump("/introduce")}
          >
            INTRODUCE
          </div>
          <div className={styles.navButton} onClick={() => onJump("/guide")}>
            GUIDE
          </div>
          <div className={styles.navButton} onClick={() => onJump("/contact")}>
            CONTACT
          </div>
        </div>
      </>
    ),
    [],
  );

  return (
    <>
      <div className={styles.navBar}>{Content}</div>
      <div className={`${styles.navBar} ${styles.navBarFixed}`}>{Content}</div>
    </>
  );
};
