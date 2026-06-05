import styles from "./navBar.module.less";
import Logo from "@/assets/LOGO.svg";
import { useNavigateLink } from "@/hooks";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { NavBarActiveTabPath, NavBarList } from "./navBarType";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { onJump } = useNavigateLink();
  const location = useLocation();
  const { t } = useTranslation();

  const activeKey = useMemo(() => {
    const currentItem = NavBarList.find(
      (item) => item.path === location.pathname,
    );
    return currentItem ? currentItem.key : "Home"; // 默认高亮 Home
  }, [location.pathname]);

  const Content = useMemo(
    () => (
      <>
        <div
          className={styles.logo}
          onClick={() => onJump(NavBarActiveTabPath.Home)}
        >
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.navButtons}>
          {NavBarList.map((item) => (
            <div
              key={item.key}
              className={classNames(styles.navButton, {
                [styles.active]: activeKey === item.key, // 动态判断高亮
              })}
              onClick={() => onJump(item.path)}
            >
              {t(item.name)}
            </div>
          ))}
        </div>
      </>
    ),
    [activeKey, onJump, t],
  );

  return (
    <>
      <div className={styles.navBar}>{Content}</div>
      <div className={`${styles.navBar} ${styles.navBarFixed}`}>{Content}</div>
    </>
  );
};
