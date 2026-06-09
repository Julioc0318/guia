import styles from "./index.module.less";
export interface BasicSecondTitleProps {
  titleText: string;
}

export const BasicSecodTitle = ({ titleText }: BasicSecondTitleProps) => {
  return (
    <div>
      <span className={styles.title}>{titleText}</span>
    </div>
  );
};
