import styles from "./footer.module.less";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.information}>
        <div className={styles.contact}>
          <div className={styles.contactRow}>
            <span className={styles.label}>{t("footer.tele")}</span>
            <span className={styles.value}>+34 923-120-460</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.label}>{t("footer.addr")}</span>
            <span className={styles.value}>
              Plaza Julián Sánchez El Charro, 1 37005 Salamanca (España).
            </span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.label}>{t("footer.email")}</span>
            <span className={styles.value}>delibes@colegiodelibes.com</span>
          </div>
        </div>

        <div className={styles.divider} />
        <div>{t("footer.copyright")}</div>
      </div>
    </div>
  );
};
