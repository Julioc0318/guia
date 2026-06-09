import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.less";
import { BasicTitle } from "@/components/BasicTitle";
import imgSrc from "@/assets/Guide/BBVA.png";

export const Guide: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.guideWrapper}>
      <BasicTitle
        imgSrc={imgSrc}
        titleText={t("guide.title")}
        desc={t("guide.desc")}
        author={"GO.DELIBES"}
        time={Date.parse("2026-06-09")}
      />
      <div className={styles.guideCard}>
        {/* 核心步骤时间线 */}
        <div className={styles.stepsContainer}>
          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>1</div>
            <h3>{t("guide.step1Title")}</h3>
            <p className={styles.stepIntro}>{t("guide.step1Desc")}</p>
            <div className={styles.docsGrid}>
              <div className={styles.docItem}>{t("guide.doc1")}</div>
              <div className={styles.docItem}>{t("guide.doc2")}</div>
              <div className={styles.docItem}>{t("guide.doc3")}</div>
              <div className={styles.docItem}>{t("guide.doc4")}</div>
            </div>
          </div>

          {/* 👑 核心利益点：填写邀请码（佣金来源） */}
          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>2</div>
            <h3>{t("guide.step2Title")}</h3>
            <p className={styles.stepIntro}>{t("guide.step2Desc")}</p>
            <div className={styles.codePromoBox}>
              <div className={styles.codeLabel}>{t("guide.codeLabel")}</div>
              <div className={styles.codeValue}>YOUR_CODE_HERE</div>

              <p className={styles.codeImportance}>
                {t("guide.codeImportance")}
              </p>

              <div className={styles.officialLinkWrapper}>
                <a
                  href="https://www.bbva.es/general/promociones-y-ofertas/plan-amigo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.officialLink}
                >
                  {t("guide.officialLink")}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>3</div>
            <h3>{t("guide.step3Title")}</h3>
            <p className={styles.stepIntro}>{t("guide.step3Desc")}</p>
          </div>

          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>4</div>
            <h3>{t("guide.step4Title")}</h3>
            <p className={styles.stepIntro}>{t("guide.step4Desc")}</p>
          </div>
        </div>

        {/* 避坑说明 */}
        <div className={styles.warningAlert}>
          <div className={styles.alertContent}>
            <h4>{t("guide.warningTitle")}</h4>
            <p>{t("guide.warningDesc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
