import styles from './navBar.module.less'
import Logo from '@/assets/goSalamanca2.svg'

export const NavBar = () => {
    return <div className={styles.navBar}>
        <div className={styles.logo}>
            <img src={Logo} alt='logo' />
        </div>
        <div className={styles.navButtons}>
            <div className={styles.navButton}>INTRODUCE</div>
            <div className={styles.navButton}>GUIDE</div>
            <div className={styles.navButton}>CONTACT</div>
        </div>
    </div>
}