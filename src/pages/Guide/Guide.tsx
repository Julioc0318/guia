import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.less";
import { BasicTitle } from "@/components/BasicTitle";
import imgSrc from "@/assets/Guide/BBVA.png";
import { BasicSecodTitle } from "@/components/BasicSecondTitle";
import { BasicContent } from "@/components/BasicContent";

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
        <BasicSecodTitle titleText={t("guide.step1Title")} />
        <BasicContent text={t("guide.step1Desc")} />
        <BasicContent text={t("guide.doc1")} />
        <BasicContent text={t("guide.doc2")} />
        <BasicContent text={t("guide.doc3")} />
        <BasicContent text={t("guide.doc4")} />
        <BasicSecodTitle titleText={t("guide.step2Title")} />
        <BasicContent text={t("guide.step2Desc")} />
        <div className={styles.codePromoBox}>
          <div className={styles.codeLabel}>{t("guide.codeLabel")}</div>
          <div className={styles.codeValue}>YOUR_CODE_HERE</div>
          <p className={styles.codeImportance}>{t("guide.codeImportance")}</p>
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
        <BasicSecodTitle titleText={t("guide.step3Title")} />
        <BasicContent text={t("guide.step3Desc")} />
        <BasicSecodTitle titleText={t("guide.step4Title")} />
        <BasicContent text={t("guide.step4Desc")} />
      </div>

      {/* 避坑说明 */}
      <div className={styles.warningAlert}>
        <div className={styles.alertContent}>
          <h4>{t("guide.warningTitle")}</h4>
          <p>{t("guide.warningDesc")}</p>
        </div>
      </div>
    </div>
  );
};
