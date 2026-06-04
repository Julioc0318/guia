import styles from "./banner.module.less";
import { Carousel } from "antd";
import BannerPath_1 from "@/assets/Banner/1.jpg";
import BannerPath_2 from "@/assets/Banner/2.jpg";
import BannerPath_3 from "@/assets/Banner/3.jpg";
import BannerPath_4 from "@/assets/Banner/4.jpg";

// 1. 定义 Banner 数据的本地静态数组
const BANNER_LIST = [
  { id: 1, title: "Banner 1", desc: "412", src: BannerPath_1 },
  { id: 2, title: "Banner 2", desc: "123123123123123123123123123123123123123123", src: BannerPath_2 },
  { id: 3, title: "Banner 3", desc: "123123123123123123123123123123123123123123", src: BannerPath_3 },  
  { id: 4, title: "Banner 4", desc: "1141", src: BannerPath_4 },
];

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={4000}>
        {/* 2. 使用 map 循环渲染子项 */}
        {BANNER_LIST.map((item) => (
          <div key={item.id} className={styles.bannerItem}>
            <div className={styles.bannerContent}>
              <p>{item.desc}</p>
              <h3>{item.title}</h3>
            </div>
            <img src={item.src} alt={item.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};