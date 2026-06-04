import styles from "./footer.module.less";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.information}>
        <div>
          Phone: 123-456-7890
          <br />
          Address: 123 Main St, Anytown, USA
          <br />
          Email: sajdjji@gamil.com
          <br />
        </div>

        <div className={styles.divider} />
        <div>Version: 1.0.0</div>
        <div>Copyright © 2024 Guia. All rights reserved.</div>
      </div>
    </div>
  );
};
