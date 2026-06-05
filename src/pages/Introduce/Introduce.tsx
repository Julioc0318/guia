import { Card } from "antd";
import styles from "./Introduce.module.less";
import { MOCK_CLASS_LIST } from "./indexMock";

// （MOCK_CLASS_LIST 数据保持不变，依然用上一轮的数据源）

export const Introduce = () => {
  return (
    <div className={styles.introduceContainer}>
      {/* 🚀 外层变成 Grid 布局，卡片之间更加紧凑 */}
      {MOCK_CLASS_LIST.map((cls) => (
        <Card 
          key={cls.id} 
          title={<span className={styles.cardTitle}>{cls.level} · {cls.room}</span>}
          className={styles.denseCard}
          size="small" // 🚀 开启 Antd 的小号紧凑紧凑模式
        >
          <div className={styles.denseContent}>
            {cls.sessions.map((session, index) => (
              <div key={index} className={styles.sessionLine}>
                
                {/* 👑 顶部紧凑栏：类型徽章 + 老师 + 时间 */}
                <div className={styles.sessionHeader}>
                  <span className={`${styles.badge} ${styles[session.type]}`}>
                    {session.type.slice(0, 4)} {/* 简写文字如 Gram / Comu 提升密度 */}
                  </span>
                  <span className={styles.teacherInfo}>Prof: <strong>{session.teacher}</strong></span>
                  <span className={styles.timeInfo}>{session.time}</span>
                </div>
                
                {/* 👑 底部紧凑栏：学生名单扁平化紧凑排列 */}
                <div className={styles.studentsRow}>
                  <span className={styles.studentLabel}>Stus:</span>
                  <div className={styles.studentTags}>
                    {session.students.map((student, sIdx) => (
                      <span key={sIdx} className={styles.miniTag}>
                        {student}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};