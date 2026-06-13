import { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.less";
import classNames from "classnames";
import EN from "@/assets/icons/EN.svg";
import ES from "@/assets/icons/ES.svg";
import RU from "@/assets/icons/RU.svg";
import ZH from "@/assets/icons/ZH.svg";

// 💡 2. 完美的语言和图标全局映射表
const LANGUAGE_CONFIG: Record<string, { label: string; icon: string }> = {
  zh: { label: "中文", icon: ZH },
  en: { label: "English", icon: EN },
  es: { label: "Español", icon: ES },
  ru: { label: "Русский", icon: RU },
};

export const LanguageSwitchMenu = () => {
  const { i18n } = useTranslation();

  // 💡 获取当前纯净的语言 code（例如 "zh", "en"），用于做更精准的唯一 key 匹配
  const currentLangCode = useMemo(() => {
    const lang = i18n.resolvedLanguage || i18n.language || "zh";
    const shortLang = lang.split("-")[0];
    return LANGUAGE_CONFIG[shortLang] ? shortLang : "zh";
  }, [i18n.language, i18n.resolvedLanguage]);

  // 缓存当前激活项的配置
  const currentConfig = LANGUAGE_CONFIG[currentLangCode];

  // 缓存语言切换函数
  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
    },
    [i18n],
  );

  return (
    <div className={styles.langDropdown}>
      <div className={styles.divider} />
      {/* 触发器：展示当前语言的圆形国旗和文字 */}
      <div className={styles.langTrigger}>
        <span className={styles.langText}>{currentConfig.label}</span>
        <img className={styles.menuFlagIcon} src={currentConfig.icon} />
      </div>

      <div className={styles.langMenu}>
        <div className={styles.langMenuInner}>
          {Object.entries(LANGUAGE_CONFIG).map(([code, config]) => {
            // 💡 优化：直接用唯一 code 对比，规避中英文或大小写字符串比对产生的 Bug
            const isActive = currentLangCode === code;

            return (
              <div
                key={code}
                className={classNames(styles.langItem, {
                  [styles.langItemActive]: isActive,
                })}
                onClick={() => changeLanguage(code)}
              >
                <span className={styles.menuLangText}>{config.label}</span>
                <img className={styles.menuFlagIcon} src={config.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
