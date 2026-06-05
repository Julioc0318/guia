import { Banner } from "./Comp/Banner/banner";
import { Footer } from "./Comp/Footer/footer";
import { NavBar } from "./Comp/NavBar/navBar";
import { Content } from "./Comp/Content/content";
import styles from "./Home.module.less";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <NavBar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
