import styles from "./banner.module.less";
import { Carousel } from "antd";
import {
  type BANNER_TYPE,
  BANNER_TITLE_ENUM,
  BANNER_DESC_ENUM,
  BANNER_SRC_ENUM,
} from "./bannerType";

export const Banner = () => {
  // 1. 定义 Banner 数据的本地静态数组
  const BANNER_LIST: BANNER_TYPE[] = [
    {
      id: 1,
      title: BANNER_TITLE_ENUM.BANNER_1,
      desc: BANNER_DESC_ENUM.BANNER_1,
      src: BANNER_SRC_ENUM.BANNER_1,
    },
    {
      id: 2,
      title: BANNER_TITLE_ENUM.BANNER_2,
      desc: BANNER_DESC_ENUM.BANNER_2,
      src: BANNER_SRC_ENUM.BANNER_2,
    },
    {
      id: 3,
      title: BANNER_TITLE_ENUM.BANNER_3,
      desc: BANNER_DESC_ENUM.BANNER_3,
      src: BANNER_SRC_ENUM.BANNER_3,
    },
    {
      id: 4,
      title: BANNER_TITLE_ENUM.BANNER_4,
      desc: BANNER_DESC_ENUM.BANNER_4,
      src: BANNER_SRC_ENUM.BANNER_4,
    },
  ];

  return (
    <div className={styles.banner}>
      <Carousel
        autoplay={{ dotDuration: true }}
        autoplaySpeed={4000}
      >
        {/* 2. 使用 map 循环渲染子项 */}
        {BANNER_LIST.map((item) => (
          <div key={item.id} className={styles.bannerItem}>
            <div className={styles.bannerContent}>
              <h3 className="gradiente-blue">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <img src={item.src as unknown as string} alt={item.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export { BANNER_TITLE_ENUM };
