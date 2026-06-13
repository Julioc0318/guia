import styles from './index.module.less';

const ITEMS = ['萨拉曼卡', '银行开户', '电子证书', '市政登记', '自由市集'];

export const Marquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeInner}>
        {/* 内容重复两遍，实现无缝衔接 */}
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <div key={index} className={styles.marqueeItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};