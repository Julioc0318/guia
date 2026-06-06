import React, { useMemo } from "react";
import styles from "./navBar.module.less";
import Logo from "@/assets/LOGO.svg";
import { useNavigateLink } from "@/hooks";
import { useLocation } from "react-router-dom";
import { NavBarActiveTabPath, NavBarList } from "./navBarType";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export const NavBar: React.FC = () => {
  const { onJump } = useNavigateLink();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const activeKey = useMemo(() => {
    const currentItem = NavBarList.find(
      (item) => item.path === location.pathname,
    );
    return currentItem ? currentItem.key : "Home";
  }, [location.pathname]);

  // 支持的四种语言映射表
  const languageMap = useMemo(
    () => ({
      zh: "ZH",
      en: "EN",
      es: "ES",
      ru: "RU",
    }),
    [],
  );

  // 动态获取当前激活的语言标识（fallback 走 ZH）
  const currentLangLabel = useMemo(() => {
    const lang = i18n.resolvedLanguage || i18n.language || "zh";
    const shortLang = lang.split("-")[0]; // 处理 zh-CN 等分支情况
    return languageMap[shortLang as keyof typeof languageMap] || "ZH";
  }, [i18n.language, i18n.resolvedLanguage, languageMap]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
          {/* 左侧常规路由导航 */}
          {NavBarList.map((item) => (
            <div
              key={item.key}
              className={classNames(styles.navButton, {
                [styles.active]: activeKey === item.key,
              })}
              onClick={() => onJump(item.path)}
            >
              {t(item.name)}
            </div>
          ))}

          {/* 🌐 最右侧流式语言切换菜单 (纯 CSS Hover 触发) */}
          {/* 🌐 最右侧流式语言切换菜单 */}
          <div className={styles.langDropdown}>
            <div className={styles.langTrigger}>🌐 {currentLangLabel}</div>
            <div className={styles.langMenu}>
              {/* 🚀 新增这一层 Inner 容器以配合安全桥样式 */}
              <div className={styles.langMenuInner}>
                {Object.entries(languageMap).map(([code, label]) => (
                  <div
                    key={code}
                    className={classNames(styles.langItem, {
                      [styles.langItemActive]: currentLangLabel === label,
                    })}
                    onClick={() => changeLanguage(code)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    [currentLangLabel, languageMap, onJump, activeKey, t, changeLanguage],
  );

  return (
    <>
      <div className={styles.navBar}>{Content}</div>
      <div className={`${styles.navBar} ${styles.navBarFixed}`}>{Content}</div>
    </>
  );
};
