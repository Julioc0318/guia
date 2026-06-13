import { Content } from "./Comp/Content/content";
import { Introduce } from "./Comp/Introduce";
import styles from "./Home.module.less";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Introduce />
    </div>
  );
};
