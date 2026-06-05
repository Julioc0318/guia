import styles from "./navBar.module.less";
import Logo from "@/assets/LOGO.svg";
import { useNavigateLink } from "@/hooks";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { NavBarActiveTabPath, NavBarList } from "./navBarType";
import classNames from "classnames";

export const NavBar = () => {
  const { onJump } = useNavigateLink();
  const location = useLocation();

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
          {/* 👑 一行 map，搞定所有导航按钮的渲染、高亮判定、点击事件 */}
          {NavBarList.map((item) => (
            <div
              key={item.key}
              className={classNames(styles.navButton, {
                [styles.active]: activeKey === item.key, // 动态判断高亮
              })}
              onClick={() => onJump(item.path)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </>
    ),
    [activeKey, onJump], // 🚀 依赖项精简为 activeKey，只有高亮项变了才会重绘，性能拉满
  );

  return (
    <>
      <div className={styles.navBar}>{Content}</div>
      <div className={`${styles.navBar} ${styles.navBarFixed}`}>{Content}</div>
    </>
  );
};
