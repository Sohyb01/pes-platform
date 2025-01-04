import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { students } from "./users";
import { student_achievements } from "./achievements";

export const studentsAchievementsRelations = relations(
  students,
  ({ many }) => ({
    map_student_achievements_students: many(map_student_achievements_students),
  })
);

export const achievementsStudentsRelations = relations(
  student_achievements,
  ({ many }) => ({
    map_student_achievements_students: many(map_student_achievements_students),
  })
);

export const map_student_achievements_students = pgTable(
  "map_student_achievements_students",
  {
    student_id: uuid("student_id")
      .notNull()
      .references(() => students.id),
    student_achievement_id: uuid("student_achievement_id")
      .notNull()
      .references(() => student_achievements.id),
  },
  (t) => [t.student_id, t.student_achievement_id]
);

export const studentsToStudentAchievementsRelations = relations(
  map_student_achievements_students,
  ({ one }) => ({
    student_achievement: one(student_achievements, {
      fields: [map_student_achievements_students.student_achievement_id],
      references: [student_achievements.id],
    }),
    student: one(students, {
      fields: [map_student_achievements_students.student_id],
      references: [students.id],
    }),
  })
);
