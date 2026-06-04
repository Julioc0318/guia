import styles from './content.module.less'

export const Content = () => {
    return <div className={styles.content}>
        <div className={styles.left}>
            <h3>Ourservisce</h3>
            <p>这里是内容描述</p>
            <p>1231</p>
        </div>
        <div className={styles.right}>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
        </div>
    </div>
}