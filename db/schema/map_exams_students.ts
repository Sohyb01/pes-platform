import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { students } from "./users";
import { exams } from "./exams";

export const studentsExamsRelations = relations(students, ({ many }) => ({
  map_exams_students: many(map_exams_students),
}));

export const examsStudentsRelations = relations(exams, ({ many }) => ({
  map_exams_students: many(map_exams_students),
}));

export const map_exams_students = pgTable(
  "map_exams_students",
  {
    student_id: uuid("student_id")
      .notNull()
      .references(() => students.id),
    exam_id: uuid("exam_id")
      .notNull()
      .references(() => exams.id),
  },
  (t) => [t.student_id, t.exam_id]
);

export const studentsToExamsRelations = relations(
  map_exams_students,
  ({ one }) => ({
    exam: one(exams, {
      fields: [map_exams_students.exam_id],
      references: [exams.id],
    }),
    student: one(students, {
      fields: [map_exams_students.student_id],
      references: [students.id],
    }),
  })
);
