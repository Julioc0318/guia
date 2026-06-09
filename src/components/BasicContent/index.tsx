import styles from "./index.module.less";

export const BasicContent = ({ text }: { text: string }) => {
  return (
    <div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
