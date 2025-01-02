import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { students } from "./users";
import { exams } from "./exams";

export const studentsRelations = relations(students, ({ many }) => ({
  map_exams_students: many(map_exams_students),
}));

export const examsRelations = relations(exams, ({ many }) => ({
  map_exams_students: many(map_exams_students),
}));

export const map_exams_students = pgTable(
  "map_exams_students",
  {
    studentId: uuid("student_id")
      .notNull()
      .references(() => students.id),
    examId: uuid("exam_id")
      .notNull()
      .references(() => exams.id),
  },
  (t) => [t.studentId, t.examId]
);

export const studentsToexamsRelations = relations(
  map_exams_students,
  ({ one }) => ({
    exam: one(exams, {
      fields: [map_exams_students.examId],
      references: [exams.id],
    }),
    student: one(students, {
      fields: [map_exams_students.studentId],
      references: [students.id],
    }),
  })
);
