// 🚀 1. 定义课程数据类型（TypeScript 规范）
export interface CourseSession {
  type: "Gramática" | "Comunicación" | "DELE"; // 课程类型
  time: string;       // 课程时间
  teacher: string;    // 老师
  students: string[]; // 学生姓名列表
}

export interface ClassCardData {
  id: string;
  level: string;       // 班级等级 (A1, A2.1, A2.2 等)
  room: string;        // 教室
  sessions: CourseSession[]; // 包含的几节课（语法、沟通、DELE等）
}
