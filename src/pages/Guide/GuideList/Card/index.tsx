import classNames from "classnames";
import styles from "./index.module.less";
import type { MouseEventHandler } from "react";

export const Card = ({
  imgSrc,
  title,
  text,
  disabled,
  onClick,
}: {
  imgSrc: string;
  title: string;
  text: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={classNames([styles.card, disabled ? styles.disabled : null])}
      onClick={disabled ? undefined : onClick}
    >
      <div className={styles.pic}>
        <img src={imgSrc} />
      </div>
      <div className={styles.intro}>
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{text}</span>
      </div>
      <a>查看教程</a>
    </div>
  );
};
