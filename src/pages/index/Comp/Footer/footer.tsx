import styles from "./footer.module.less";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.information}>
        <div className={styles.contact}>
          <div className={styles.contactRow}>
            <span className={styles.label}>PHONE:</span>
            <span className={styles.value}>+34 652-984-096</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.label}>ADDRESS:</span>
            <span className={styles.value}>Calle de Pérez Oliva, 22, 1º D., Salamanca.</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.label}>EMAIL:</span>
            <span className={styles.value}>cwd19980318@gamil.com</span>
          </div>
        </div>

        <div className={styles.divider} />
        <div>COPYRIGHT © 2026 SALAMANCA.GO. All rights reserved.</div>
      </div>
    </div>
  );
};
