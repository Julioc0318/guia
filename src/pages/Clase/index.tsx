import React, { useState, useMemo } from "react";
import { Avatar } from "antd";
import { ClockCircleOutlined, UserOutlined, TeamOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import styles from "./index.module.less";
import { MOCK_CLASS_LIST } from "./indexMock";

export const Clase: React.FC = () => {
  const { t } = useTranslation();

  // 1. 默认激活第一个教室的 ID
  const [activeRoomId, setActiveRoomId] = useState<string>(() => {
    return MOCK_CLASS_LIST[0]?.id || "";
  });

  // 2. 找到当前激活教室在 Mock 数组中的索引位置，方便做前后切换
  const currentIndex = useMemo(() => {
    return MOCK_CLASS_LIST.findIndex((room) => room.id === activeRoomId);
  }, [activeRoomId]);

  // 3. 核心视窗：当前选中的那一间教室数据
  const currentRoom = useMemo(() => {
    return MOCK_CLASS_LIST[currentIndex] || null;
  }, [currentIndex]);

  // 🚀 移动端前后切换事件
  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveRoomId(MOCK_CLASS_LIST[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < MOCK_CLASS_LIST.length - 1) {
      setActiveRoomId(MOCK_CLASS_LIST[currentIndex + 1].id);
    }
  };

  return (
    <div className={styles.theaterWrapper}>
      <div className={styles.mainConsole}>
        
        {/* 🚪 导航层：PC端是垂直侧边栏，移动端自动变身成顶部的“左右切页条” */}
        <div className={styles.sidebarMenu}>
          {/* 📱 仅在移动端渲染的左右切换控制面板 */}
          <div className={styles.mobilePager}>
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className={styles.pagerArrow}
            >
              <LeftOutlined />
            </button>
            <div className={styles.pagerTitle}>
              {currentRoom ? `${currentRoom.level} - ${currentRoom.room}` : ""}
            </div>
            <button 
              onClick={handleNext} 
              disabled={currentIndex === MOCK_CLASS_LIST.length - 1}
              className={styles.pagerArrow}
            >
              <RightOutlined />
            </button>
          </div>

          {/* 💻 仅在PC端渲染的完整平铺菜单列表 */}
          <div className={styles.pcMenuList}>
            {MOCK_CLASS_LIST.map((room) => {
              const isActive = activeRoomId === room.id;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveRoomId(room.id)}
                  className={`${styles.menuBtn} ${isActive ? styles.btnActive : ""}`}
                >
                  <span className={styles.roomDot}></span>
                  {room.level} - {room.room}
                </button>
              );
            })}
          </div>
        </div>

        {/* 📺 右侧核心主视窗 */}
        <div className={styles.stageViewport}>
          {!currentRoom ? (
            <div className={styles.emptyStage}>No ongoing classes in this room</div>
          ) : (
            <div className={styles.roomContainer}>
              <div className={styles.stageHeader}>
                <h4>{currentRoom.room}</h4>
                <span className={styles.liveBadge}>{currentRoom.level}</span>
              </div>

              <div className={styles.sessionsGrid}>
                {currentRoom.sessions.map((session, idx) => {
                  const sessionKey = `${currentRoom.id}-${idx}`;
                  return (
                    <div
                      key={sessionKey}
                      className={`${styles.sessionCard} ${styles[session.type] || styles.regular}`}
                    >
                      <div className={styles.sessionTop}>
                        <span className={styles.timeTag}>
                          <ClockCircleOutlined /> {session.time}
                        </span>
                        <span className={styles.teacherName}>{session.teacher}</span>
                      </div>

                      <div className={styles.studentFlow}>
                        {session.students.map((student, sIdx) => (
                          <div key={sIdx} className={styles.studentBubble}>
                            <Avatar size={16} icon={<UserOutlined />} />
                            <span>{student}</span>
                          </div>
                        ))}
                      </div>

                      <div className={styles.cardFooter}>
                        <TeamOutlined />
                        <span>
                          {session.students.length} {t("clase.students")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};