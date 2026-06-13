import classNames from "classnames";
import styles from "./index.module.less";
import { NavBarList } from "../../navBarType";
import { useNavigateLink } from "@/hooks";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { LanguageSwitchMenu } from "../LanguageSwitchMenu";



export const NavBarMenu = () => {
  const { onJump } = useNavigateLink();
  const location = useLocation();
  const { t } = useTranslation();

  const activeKey = useMemo(() => {
    const currentItem = NavBarList.find(
      (item) => item.path === location.pathname,
    );
    return currentItem ? currentItem.key : "Home";
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      // 如果你希望页面只是丝滑地滚回顶部
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 如果路由变了，走你原本正常的跳转逻辑
    onJump(path);
  };


  return (
    <div className={styles.navButtons}>
      {NavBarList.map((item) => (
        <div
          key={item.key}
          className={classNames(styles.navButton, {
            [styles.active]: activeKey === item.key,
          })}
          onClick={() => handleNavClick(item.path)}
        >
          {t(item.name)}
        </div>
      ))}
      <LanguageSwitchMenu />
    </div>
  );
};