import { useTranslation } from "react-i18next";
import styles from "./index.module.less";

export const CodePromoBox = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.codePromoBox}>
      <div className={styles.codeLabel}>{t("guide.codeLabel")}</div>
      <div className={styles.codeValue}>YOUR_CODE_HERE</div>
      <p className={styles.codeImportance}>{t("guide.codeImportance")}</p>
      <div className={styles.officialLinkWrapper}>
        <a
          href="https://www.bbva.es/general/promociones-y-ofertas/plan-amigo.html"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.officialLink}
        >
          {t("guide.officialLink")}
        </a>
      </div>
    </div>
  );
};
