import { Banner } from './Comp/Banner/banner'
import { Footer } from './Comp/Footer/footer'
import { NavBar } from './Comp/NavBar/navBar'
import { Content } from './Comp/Content/content'
import styles from './index.module.less'

export const Index = () => {
    return <div className={styles.index}>
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
}