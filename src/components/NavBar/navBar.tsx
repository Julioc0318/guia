import React, { useMemo } from "react";
import styles from "./navBar.module.less";
import Logo from "@/assets/LOGO.svg";
import { NavBarMenu } from "./Comp/NavBarMenu";

export const NavBar: React.FC = () => {
  const Content = useMemo(
    () => (
      <>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <NavBarMenu />
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
