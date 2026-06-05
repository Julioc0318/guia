import styles from "./content.module.less";
import { useNavigateLink } from "@/hooks";
import { CONTENT_LIST } from "./contentType";
import { useTranslation } from "react-i18next";

export const Content = () => {
  const { onJump } = useNavigateLink();
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className={styles.right}>
        {CONTENT_LIST.map((item) => (
          <div
            key={item.id}
            className={`${styles.contentItem} ${item.click ? styles.contentItemClickable : styles.contentItemUnclickable}`}
            onClick={() => (item.click ? onJump(item.click) : null)}
          >
            <div className={styles.contentInfo}>
              <h3>{t(item.title)}</h3>
            </div>
            <img src={item.src as unknown as string} alt={item.title} />

            {/* 👑 核心扩展：如果不可点击，注入“建设中”的划出遮罩层 */}
            {!item.click && (
              <div className={styles.comingSoonOverlay}>
                <div className={styles.overlayText}>
                  <span>{t('home.content.Under')}</span>
                  <span>{t('home.content.Construction')}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
