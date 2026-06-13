import classNames from "classnames";
import styles from "./index.module.less";
import { CaretRightOutlined } from "@ant-design/icons";

export const Card = ({
  title,
  text,
  size,
  disabled,
}: {
  title: string;
  text?: string;
  size?: "small" | "normal"; // 小卡片和普通卡片
  disabled?: boolean;
}) => {
  const isSmall = size === "small";
  return (
    <div
      className={classNames([
        styles.card,
        isSmall ? styles.smallCard : "",
        disabled ? styles.disabled : "",
      ])}
    >
      <i className={styles.icon}>
        <CaretRightOutlined />
      </i>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
