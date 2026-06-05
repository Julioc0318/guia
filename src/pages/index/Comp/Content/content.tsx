import { Link, useNavigate } from "react-router-dom";
import styles from "./content.module.less";
// 1. 定义数据列表
import {
  type CONTENT_TYPE,
  CONTENT_TITLE_ENUM,
  CONTENT_DESC_ENUM,
  CONTENT_SRC_ENUM,
  CONTENT_CLICK_ENUM,
} from "./contentType";
import { Divider } from "antd";

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
  const navigate = useNavigate();

  const onJump = (url: string) => {
    // 🚀 核心：通过正则表达式或 String.startsWith 判断是否是外部链接
    const isExternal = /^https?:\/\//.test(url);

    if (isExternal) {
      window.open(url, "_self", "noopener,noreferrer");
    } else {
      // 🏠 情况 B：内部路由，继续使用 react-router 的 navigate
      navigate(url);
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <h3>
          <Link to="/guide">GUIDE</Link>
        </h3>
        <Divider className={styles.divider} />
        <span>BETTER MAKE A QUICK CHECK</span>
      </div>
      <div className={styles.right}>
        {/* 2. 使用 map 循环渲染子项 */}
        {CONTENT_LIST.map((item) => (
          <div
            key={item.id}
            className={styles.contentItem}
            onClick={() => onJump(item.click)}
          >
            <div className={styles.contentInfo}>
              <h3>{item.title}</h3>
              {/* <p>{item.desc}</p> */}
            </div>
            <img src={item.src as unknown as string} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
