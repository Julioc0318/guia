import styles from './content.module.less'
import BannerPath_1 from "@/assets/Banner/1.jpg";
import BannerPath_2 from "@/assets/Banner/2.jpg";
import BannerPath_3 from "@/assets/Banner/3.jpg";
import BannerPath_4 from "@/assets/Banner/4.jpg";

export const Content = () => {
    return <div className={styles.content}>
        <div className={styles.left}>
            <h3>GUIDE</h3>
            <span>EVERYTHING YOU NEED TO KNOW</span>
        </div>
        <div className={styles.right}>
            <img src={BannerPath_1} alt="Banner 1" />
            <img src={BannerPath_2} alt="Banner 2" />
            <img src={BannerPath_3} alt="Banner 3" />
            <img src={BannerPath_4} alt="Banner 4" />
        </div>
    </div>
}