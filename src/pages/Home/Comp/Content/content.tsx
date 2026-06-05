import styles from "./content.module.less";
// 1. 定义数据列表
import {
  type CONTENT_TYPE,
  CONTENT_TITLE_ENUM,
  CONTENT_DESC_ENUM,
  CONTENT_SRC_ENUM,
  CONTENT_CLICK_ENUM,
} from "./contentType";
import { useNavigateLink } from "@/hooks";

const CONTENT_LIST: CONTENT_TYPE[] = [
  {
    id: 1,
    title: CONTENT_TITLE_ENUM.CONTENT_1,
    desc: CONTENT_DESC_ENUM.CONTENT_1,
    src: CONTENT_SRC_ENUM.CONTENT_1,
    click: CONTENT_CLICK_ENUM.CONTENT_1,
  },
  {
    id: 2,
    title: CONTENT_TITLE_ENUM.CONTENT_2,
    desc: CONTENT_DESC_ENUM.CONTENT_2,
    src: CONTENT_SRC_ENUM.CONTENT_2,
    click: CONTENT_CLICK_ENUM.CONTENT_2,
  },
  {
    id: 3,
    title: CONTENT_TITLE_ENUM.CONTENT_3,
    desc: CONTENT_DESC_ENUM.CONTENT_3,
    src: CONTENT_SRC_ENUM.CONTENT_3,
    click: CONTENT_CLICK_ENUM.CONTENT_3,
  },
  {
    id: 4,
    title: CONTENT_TITLE_ENUM.CONTENT_4,
    desc: CONTENT_DESC_ENUM.CONTENT_4,
    src: CONTENT_SRC_ENUM.CONTENT_4,
    click: CONTENT_CLICK_ENUM.CONTENT_4,
  },
];

export const Content = () => {
  const { onJump } = useNavigateLink();

  return (
    <div className={styles.content}>
      {/* <div className={styles.left}>
        <h3 className={"gradiente-blue"}>GUIDE</h3>
        <Divider className={styles.divider} />
        <div className={styles.informationArea}>
          <span>1. Check the information posted by the college.</span>
          <span>2. How to open a bank account here?</span>
          <span>3. How to apply NIE?</span>
          <span>4. About us.</span>
        </div>
      </div> */}
      <div className={styles.right}>
        {/* 2. 使用 map 循环渲染子项 */}
        {CONTENT_LIST.map((item) => (
          <div
            key={item.id}
            className={`${styles.contentItem} ${item.click ? styles.contentItemClickable : styles.contentItemUnclickable}`}
            onClick={() => (item.click ? onJump(item.click) : null)}
          >
            <div className={styles.contentInfo}>
              <h3>{item.title}</h3>
            </div>
            <img src={item.src as unknown as string} alt={item.title} />

            {/* 👑 核心扩展：如果不可点击，注入“建设中”的划出遮罩层 */}
            {!item.click && (
              <div className={styles.comingSoonOverlay}>
                <div className={styles.overlayText}>
                  <span>UNDER</span>
                  <span>CONSTRUCTION</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
