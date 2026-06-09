import React, { useState } from "react";
import styles from "./index.module.less";
import { BasicSecodTitle } from "../BasicSecondTitle";

interface BasicCollapseGroupProps {
  titleText: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export const BasicCollapseGroup: React.FC<BasicCollapseGroupProps> = ({
  titleText,
  defaultOpen = true,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.collapseGroup}>
      {/* 触发整行点击 */}
      <div onClick={() => setIsOpen(!isOpen)} className={styles.collapseHeader}>
        <div className={styles.titleArea}>
          {/* 🚀 动态控制旋转类名：展开时顺时针旋转 90 度，或者直接180度上下翻转 */}
          <span
            className={`${styles.arrowIcon} ${isOpen ? styles.arrowExpanded : ""}`}
          >
            ▶
          </span>
          <BasicSecodTitle titleText={titleText} />
        </div>
      </div>

      {/* 内容条件渲染 */}
      {isOpen && <div className={styles.collapseContent}>{children}</div>}
    </div>
  );
};
