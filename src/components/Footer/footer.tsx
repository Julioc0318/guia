import styles from "./footer.module.less";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.information}>
        <div className={styles.contact}>
          <div className={styles.contactRow}>
            <span className={styles.label}>TEL:</span>
            <span className={styles.value}>+34 923-120-460</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.label}>ADDR:</span>
            <span className={styles.value}>Plaza Julián Sánchez El Charro, 1 37005 Salamanca (España).</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.label}>EMAIL:</span>
            <span className={styles.value}>delibes@colegiodelibes.com</span>
          </div>
        </div>

        <div className={styles.divider} />
        <div>COPYRIGHT ©GO.DELIBES 2026 All rights reserved.</div>
      </div>
    </div>
  );
};
