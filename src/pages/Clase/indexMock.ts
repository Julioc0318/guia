import type { ClassCardData } from "./indexType";

export const MOCK_CLASS_LIST: ClassCardData[] = [
  {
    id: "class-a1",
    level: "A1",
    room: "107",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "ANA", students: ["Weidang Chen", "Reyes", "John Doe", "Alejandro", "Yuki Tanaka", "Maximilian"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "REYES", students: ["Weidang Chen", "Anton", "Maria", "Li Ming", "Zhang San", "Lucas", "Isabella", "Mateo", "Sophie"] }
    ]
  },
  {
    id: "class-a1-2",
    level: "A1",
    room: "108",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "ANA", students: ["Weidang Chen", "Reyes", "John Doe", "Alejandro", "Yuki Tanaka", "Maximilian"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "REYES", students: ["Weidang Chen", "Anton", "Maria", "Li Ming", "Zhang San", "Lucas", "Isabella", "Mateo", "Sophie"] }
    ]
  },
  {
    id: "class-a21",
    level: "A2.1",
    room: "203",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "ANTON", students: ["David Miller", "Emma Watson", "Sofia Rodriguez"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "MARIA", students: ["David Miller", "Emma Watson", "Sofia Rodriguez", "Chloe", "Hans Müller", "Kim Min-ji"] },
      { type: "DELE", time: "14:00 - 15:30", teacher: "ANA", students: ["David Miller", "Emma Watson", "Weidang Chen"] }
    ]
  },
  {
    id: "class-a22",
    level: "A2.2",
    room: "104",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "JAVIER", students: ["Alumni 1", "Alumni 2", "Charlotte", "Liam Smith"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "LUCIA", students: ["Alumni 1", "Alumni 2", "Charlotte", "Liam Smith", "Noah", "Oliver", "Emma"] }
    ]
  },
  {
    id: "class-b11",
    level: "B1.1",
    room: "301",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "CARLOS", students: ["Alexander", "Victoria", "Leonardo", "Nikolai Petrov", "Chen Wei"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "ELENA", students: ["Alexander", "Victoria", "Leonardo", "Nikolai Petrov", "Chen Wei", "Takashi", "Fatima"] }
    ]
  },
  {
    id: "class-b12",
    level: "B1.2",
    room: "305",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "MARTA", students: ["Emily', 'Daniel Jones", "Arthur Pendragon"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "MARTA", students: ["Emily", "Daniel Jones", "Arthur Pendragon", "Gabriel", "Mia Wong"] },
      { type: "DELE", time: "15:40 - 17:10", teacher: "CARLOS", students: ["Arthur Pendragon", "Mia Wong"] }
    ]
  },
  {
    id: "class-b21",
    level: "B2.1",
    room: "202",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "SERGIO", students: ["Lucas Silva", "Amélie Poulain", "George", "Youssef"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "BEA", students: ["Lucas Silva", "Amélie Poulain", "George", "Youssef", "Santiago", "Elena Rostova"] }
    ]
  },
  {
    id: "class-b22",
    level: "B2.2",
    room: "204",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "FERNANDO", students: ["Jack Sparrow", "Elizabeth", "Will Turner"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "FERNANDO", students: ["Jack Sparrow", "Elizabeth", "Will Turner", "Barbossa", "James Norrington"] }
    ]
  },
  {
    id: "class-b2d",
    level: "B2 DELE",
    room: "LAB 01",
    sessions: [
      { type: "DELE", time: "09:00 - 11:00", teacher: "ANA", students: ["Tom Hardy", "Cillian Murphy", "Leonardo DiCaprio", "Brad Pitt"] },
      { type: "DELE", time: "11:00 - 13:00", teacher: "REYES", students: ["Tom Hardy", "Cillian Murphy", "Leonardo DiCaprio", "Brad Pitt", "Matt Damon", "Ben Affleck"] }
    ]
  },
  {
    id: "class-c11",
    level: "C1.1",
    room: "402",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "MANUEL", students: ["Bruce Wayne", "Clark Kent", "Diana Prince"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "ISABEL", students: ["Bruce Wayne", "Clark Kent", "Diana Prince", "Barry Allen", "Hal Jordan"] }
    ]
  },
  {
    id: "class-c12",
    level: "C1.2",
    room: "405",
    sessions: [
      { type: "Gramática", time: "09:00 - 11:00", teacher: "PEDRO", students: ["Tony Stark", "Steve Rogers"] },
      { type: "Comunicación", time: "11:00 - 13:00", teacher: "ISABEL", students: ["Tony Stark", "Steve Rogers", "Natasha Romanoff", "Bruce Banner", "Thor Odinson", "Clint Barton"] }
    ]
  },
  {
    id: "class-c1d",
    level: "C1 DELE",
    room: "LAB 02",
    sessions: [
      { type: "DELE", time: "11:00 - 13:00", teacher: "MANUEL", students: ["Peter Parker", "Gwen Stacy", "Miles Morales", "Harry Osborn"] }
    ]
  },
];