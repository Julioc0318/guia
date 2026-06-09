import { Card, Avatar, Input, Select, Space } from "antd";
import {
  ClockCircleOutlined,
  UserOutlined,
  TeamOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Introduce.module.less";
import { MOCK_CLASS_LIST } from "./indexMock";

const MAX_VISIBLE_STUDENTS = 4;

export const Introduce = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const toggleStudents = (key: string) => {
    setExpandedMap((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 1. 动态生成提取多语言下拉菜单的选项集合
  const typeOptions = useMemo(() => {
    const types = new Set<string>();
    MOCK_CLASS_LIST.forEach((room) =>
      room.sessions.forEach((s) => s.type && types.add(s.type))
    );
    return [
      { value: "all", label: t("clase.allContent") },
      ...Array.from(types).map((type) => ({
        value: type,
        label: t(`clase.${type}`) || type.toUpperCase(),
      })),
    ];
  }, [t]);

  // 2. 核心链式计算：多维度复合检索过滤逻辑
  const filteredClassList = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MOCK_CLASS_LIST.map((room) => {
      // 匹配卡片层级属性（级别或教室）
      const isRoomMatched =
        room.level.toLowerCase().includes(query) ||
        room.room.toLowerCase().includes(query);

      // 深度匹配子日程层级属性（老师、单人姓名或类型）
      const filteredSessions = room.sessions.filter((session) => {
        const isTypeMatched = selectedType === "all" || session.type === selectedType;
        if (!isTypeMatched) return false;

        if (!query) return true; // 未启用文本检索时直接保留

        const isTeacherMatched = session.teacher.toLowerCase().includes(query);
        const isStudentMatched = session.students.some((student) =>
          student.toLowerCase().includes(query)
        );

        return isRoomMatched || isTeacherMatched || isStudentMatched;
      });

      return { ...room, sessions: filteredSessions };
    }).filter((room) => room.sessions.length > 0); // 隐藏过滤后无内容的空教室
  }, [searchQuery, selectedType]);

  return (
    <div className={styles.pageWrapper}>
      {/* 🔍 顶层控制面板区域 */}
      <div className={styles.filterBar}>
        <Space size="middle" className={styles.filterSpace}>
          <Input
            prefix={<SearchOutlined className={styles.searchIcon} />}
            placeholder={t("clase.searchPlaceHolder")}
            allowClear
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <Select
            suffixIcon={<FilterOutlined />}
            value={selectedType}
            onChange={setSelectedType}
            options={typeOptions}
            className={styles.typeSelect}
          />
        </Space>
      </div>

      {/* 🗂️ 看板数据网格层级 */}
      <div className={styles.container}>
        {filteredClassList.map((room) => (
          <Card key={room.id} className={styles.roomCard} size="small">
            <div className={styles.roomHeader}>
              <div className={styles.roomTitle}>{room.level}</div>
              <div className={styles.roomName}>{room.room}</div>
            </div>

            <div className={styles.sessions}>
              {room.sessions.map((session, index) => {
                const sessionKey = `${room.id}-${index}`;
                const expanded = expandedMap[sessionKey];
                
                const students = expanded
                  ? session.students
                  : session.students.slice(0, MAX_VISIBLE_STUDENTS);

                return (
                  <div
                    key={sessionKey}
                    className={`${styles.sessionCard} ${styles[session.type] || ""}`}
                  >
                    <div className={styles.sessionTop}>
                      <div className={styles.time}>
                        <ClockCircleOutlined />
                        {session.time}
                      </div>
                      <div className={styles.teacher}>{session.teacher}</div>
                    </div>

                    <div className={styles.students}>
                      {students.map((student, studentIndex) => (
                        <div key={studentIndex} className={styles.student}>
                          <Avatar size={18} icon={<UserOutlined />} />
                          <span>{student}</span>
                        </div>
                      ))}
                    </div>

                    {session.students.length > MAX_VISIBLE_STUDENTS && (
                      <button
                        className={styles.expandBtn}
                        onClick={() => toggleStudents(sessionKey)}
                      >
                        {expanded
                          ? t("clase.showLess")
                          : `+${session.students.length - MAX_VISIBLE_STUDENTS} ${t("clase.showMore") || "More"}`}
                      </button>
                    )}

                    <div className={styles.footer}>
                      <TeamOutlined />
                      <span>
                        {session.students.length} {t("clase.students")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};