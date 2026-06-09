import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./index.module.less";
import { BasicTitle } from "@/components/BasicTitle";
import imgSrc from "@/assets/Guide/BBVA.png";
import { BasicContent } from "@/components/BasicContent";
import { BasicCollapseGroup } from "@/components/BasicCollapseGroup";
import { CodePromoBox } from "@/pages/Guide/CodePromoBox";

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
        <BasicCollapseGroup
          titleText={t("guide.step1Title")}
          defaultOpen={true}
        >
          <BasicContent text={t("guide.step1Desc")} />
          <BasicContent text={t("guide.doc1")} />
          <BasicContent text={t("guide.doc2")} />
          <BasicContent text={t("guide.doc3")} />
          <BasicContent text={t("guide.doc4")} />
        </BasicCollapseGroup>

        <BasicCollapseGroup
          titleText={t("guide.step2Title")}
          defaultOpen={false}
        >
          <BasicContent text={t("guide.step2Desc")} />
          <CodePromoBox />
          
        </BasicCollapseGroup>

        <BasicCollapseGroup
          titleText={t("guide.step3Title")}
          defaultOpen={false}
        >
          <BasicContent text={t("guide.step3Desc")} />
        </BasicCollapseGroup>

        <BasicCollapseGroup
          titleText={t("guide.step4Title")}
          defaultOpen={false}
        >
          <BasicContent text={t("guide.step4Desc")} />
        </BasicCollapseGroup>

        <BasicCollapseGroup
          titleText={t("guide.warningTitle")}
          defaultOpen={false}
        >
          <BasicContent text={t("guide.warningDesc")} />
        </BasicCollapseGroup>
      </div>
    </div>
  );
};
