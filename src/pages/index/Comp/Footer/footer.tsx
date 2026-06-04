import { Divider } from 'antd'
import styles from './footer.module.less'

export const Footer = () => {
    return <div className={styles.footer}>
        <Divider />
        <div>Phone: 123-456-7890
            Address: 123 Main St, Anytown, USA
            Email: sajdjji@gamil.com
        </div>
        <div>
            Copyright © 2024 Guia. All rights reserved.
        </div>
    </div>
}