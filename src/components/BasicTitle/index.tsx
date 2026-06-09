import { formatTimestampByLocale } from "@/utils";
import styles from "./index.module.less";
import { useTranslation } from "react-i18next";
export interface BasicTitleProps {
  imgSrc: string;
  titleText: string;
  desc: string;
  author: string;
  time: number;
}

export const BasicTitle = ({
  titleText,
  desc,
  author,
  time,
  imgSrc,
}: BasicTitleProps) => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.basicTitle}>
      <img className={styles.img} src={imgSrc} />

      <div className={styles.textArea}>
        <span className={styles.title}>{titleText}</span>
        <span className={styles.desc}>{desc}</span>
      </div>

      <div className={styles.authorAndTime}>
        <span className={styles.author}>{author}</span>
        <span> • </span>
        <span className={styles.time}>
          {formatTimestampByLocale(time, {
            variant: "date",
            locale: i18n.language,
          })}
        </span>
      </div>
    </div>
  );
};
