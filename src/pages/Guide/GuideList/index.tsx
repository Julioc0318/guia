import { useNavigateLink } from "@/hooks";
import { Card } from "./Card";
import styles from "./index.module.less";
import BBVA from "@/assets/Guide/BBVA.png";
import NIE from "@/assets/Guide/NIE.png";

export const GuideList = () => {
  const { onJump } = useNavigateLink();

  const handleClick = () => {
    onJump("/guideList/bank");
  };

  return (
    <div className={styles.guideList}>
      <span className={styles.title}>GuideList</span>
      <span className={styles.text}>
        This is a guideList, and here you can find all the process you need.
      </span>
      <div className={styles.cardList}>
        <Card
          imgSrc={BBVA}
          title={"银行卡办理"}
          text={"本文将解释如何用护照免费办理西班牙 BBVA 银行卡。"}
          onClick={handleClick}
        />
        <Card
          imgSrc={NIE}
          title={"居留卡办理"}
          text={"本文将解释办理居留卡的整体流程。"}
          disabled
        />
      </div>
    </div>
  );
};
