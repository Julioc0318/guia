import styles from './navBar.module.less'
import Logo from '@/assets/react.svg'

export const NavBar = () => {
    return <div className={styles.navBar}>
        <div>
            <img src={Logo} alt='logo' />
        </div>
        <div className={styles.navButtons}>
            <div className={styles.navButton}>About School</div>
            <div className={styles.navButton}>Guide</div>
            <div className={styles.navButton}>About Us</div>
        </div>
    </div>
}