import { Banner } from "./Comp/Banner/banner";
import { Content } from "./Comp/Content/content";
import styles from "./Home.module.less";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Banner />
      <Content />
    </div>
  );
};
