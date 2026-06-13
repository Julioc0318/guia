import MarqueeImport from "react-fast-marquee";
import styles from "./index.module.less";
import { Card } from "./Card";
const Marquee = (MarqueeImport as any).default ?? MarqueeImport;

export const ExploreCity = () => {
  return (
    <div className={styles.exploreCity}>
      <Marquee
        className={styles.marquee}
        speed={40} // 滚动速度
        gradient={true} // 开启边缘淡出遮罩 (无需手写 mask-image)
      >
        <div className={styles.cards}>
          <Card title="文件办理" text="办理住家证明等流程一览" />
          <div className={styles.smallCards}>
            <Card size="small" title="办理 NIE 卡" disabled />
            <Card size="small" title="办理银行卡" />
          </div>
        </div>
        <div className={styles.cards}>
          <Card disabled title="近期活动" text="萨拉曼卡本周户外活动表" />
          <div className={styles.smallCards}>
            <Card disabled size="small" title="健身房" />
            <Card disabled size="small" title="美味 Kebeb" />
          </div>
        </div>
        <div className={styles.cards}>
          <Card disabled title="就医流程" text="我的保险覆盖哪些医院" />
          <div className={styles.smallCards}>
            <Card disabled size="small" title="大学学院" />
            <Card disabled size="small" title="语言角" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};
