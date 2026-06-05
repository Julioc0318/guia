import React from "react";
import styles from "./index.module.less";

export const Guide: React.FC = () => {
  return (
    <div className={styles.guideWrapper}>
      <div className={styles.guideCard}>
        {/* 头部横幅 */}
        <div className={styles.headerBanner}>
          <h1 className={styles.mainTitle}>BBVA Account Opening Guide</h1>
          <p className={styles.subDescription}>
            分享我在萨拉曼卡用纯护照办理 BBVA
            银行卡的成功经验。请务必按照以下步骤操作以确保顺利下卡并激活奖励。
          </p>
        </div>

        {/* 核心步骤时间线 */}
        <div className={styles.stepsContainer}>
          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>1</div>
            <h3>准备线下开户材料</h3>
            <p className={styles.stepIntro}>
              请勿先通过手机 APP
              申请（非欧盟护照极易卡死审核）。直接携带以下材料前往 Plaza Mayor
              附近的<strong>线下中心支行</strong>：
            </p>
            <div className={styles.docsGrid}>
              <div className={styles.docItem}>护照原件（半年以上有效期）</div>
              <div className={styles.docItem}>📄 护照照片页复印件</div>
              <div className={styles.docItem}>
                语言学校录取通知书 (Matrícula)
              </div>
              <div className={styles.docItem}>📱 西班牙手机号与本地住址</div>
            </div>
          </div>

          {/* 👑 核心利益点：填写邀请码（佣金来源） */}
          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>2</div>
            <h3>现场开户并绑定邀请码（关键步骤）</h3>
            <p className={styles.stepIntro}>
              向客户经理说明开户意愿。在经理录入信息并让你进行数字化签字或在 APP
              初次激活时，<strong>务必检查并填入以下官方推荐人邀请码</strong>
              。这是激活新户奖励及后续合伙人资格的必要条件：
            </p>
            <div className={styles.codePromoBox}>
              {/* 🚀 弱化官方概念，直接点出50欧的黄金利益点 */}
              <div className={styles.codeLabel}>
                输入推荐码即可获得 €50 现金返利：
              </div>
              <div className={styles.codeValue}>YOUR_CODE_HERE</div>

              {/* 🚀 强调重要性：说明返利到账条件，并提供透明的官方活动详情链接 */}
              <p className={styles.codeImportance}>
                <strong>非常重要：</strong>激活账户并首次使用该借记卡
                <strong>消费满 €50 后</strong>，BBVA 官方会将{" "}
                <strong>€50 返现</strong>
                直接打入你的账户。现场办理时，可直接将此代码出示给客户经理录入。
              </p>

              <div className={styles.officialLinkWrapper}>
                <a
                  href="https://www.bbva.es/general/promociones-y-ofertas/plan-amigo.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.officialLink}
                >
                  查看 BBVA 官方 Plan Invita a un Amigo 活动条款
                </a>
              </div>
            </div>
          </div>

          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>3</div>
            <h3>激活 APP 与 Bizum</h3>
            <p className={styles.stepIntro}>
              签字完成后，现场下载 <strong>BBVA Spain App</strong>{" "}
              并使用经理提供的临时密码登录。登录后
              <strong>必须让经理在现场帮你开通 Bizum</strong>
              （转账即时到账系统），至此下卡完全成功。
            </p>
          </div>

          <div className={styles.stepNode}>
            <div className={styles.stepBadge}>4</div>
            <h3>获取 IBAN 与实体卡</h3>
            <p className={styles.stepIntro}>
              开通后 APP 内立刻可见 24 位 IBAN 账号（ES
              开头），可直接用于国际汇款。实体借记卡会在 1-2
              周内邮寄至你的开户地址。
            </p>
          </div>
        </div>

        {/* 避坑说明 */}
        <div className={styles.warningAlert}>
          <div className={styles.alertContent}>
            <h4>关于非居民保险与年龄政策</h4>
            <p>
              纯护照开户通常涉及高风险账户审核，银行一般会要求购买非居民基础保险（约
              €50 - €200/年）。
              <strong>
                但若你的年龄在 30
                岁以下，通常属于学生/青年群体保护范畴，一般不需要购买此保险即可直接下卡。
              </strong>
              办理时可据此向经理争取免除。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
