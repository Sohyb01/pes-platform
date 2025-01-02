import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { students } from "./users";
import { classes } from "./classes";

export const studentsRelations = relations(students, ({ many }) => ({
  map_classes_students: many(map_classes_students),
}));

export const classesRelations = relations(classes, ({ many }) => ({
  map_classes_students: many(map_classes_students),
}));

export const map_classes_students = pgTable(
  "map_classes_students",
  {
    studentId: uuid("student_id")
      .notNull()
      .references(() => students.id),
    classId: uuid("class_id")
      .notNull()
      .references(() => classes.id),
  },
  (t) => [t.studentId, t.classId]
);

export const studentsToClassesRelations = relations(
  map_classes_students,
  ({ one }) => ({
    class: one(classes, {
      fields: [map_classes_students.classId],
      references: [classes.id],
    }),
    student: one(students, {
      fields: [map_classes_students.studentId],
      references: [students.id],
    }),
  })
);
