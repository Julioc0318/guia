import { Button } from "@/components/Button";
import styles from "./index.module.less";

export const Introduce = () => {
  return (
    <div className={styles.introduce}>
      <h3 className={styles.title}>
        CHARINGO 提供城市资讯与指南
        <i>探索萨拉曼卡</i>
      </h3>
      <span className={styles.subTitle}>
        萨拉曼卡不只有托尔梅斯河的日落与黄金之城的阳光，还有初来乍到时繁琐的行政流程和活动。
        <br />
        我们将复杂的西国生存碎片化繁为简，转化为清晰、直观的现代化卡片指引。
      </span>
      <div className={styles.buttonArea}>
        <Button>探索城市</Button>
        <Button variant="secondary">查看学院</Button>
      </div>
    </div>
  );
};
