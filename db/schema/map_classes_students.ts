import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { students } from "./users";
import { classes } from "./classes";

export const studentsClassesRelations = relations(students, ({ many }) => ({
  map_classes_students: many(map_classes_students),
}));

export const classesStudentsRelations = relations(classes, ({ many }) => ({
  map_classes_students: many(map_classes_students),
}));

export const map_classes_students = pgTable(
  "map_classes_students",
  {
    student_id: uuid("student_id")
      .notNull()
      .references(() => students.id),
    class_id: uuid("class_id")
      .notNull()
      .references(() => classes.id),
  },
  (t) => [t.student_id, t.class_id]
);

export const studentsToClassesRelations = relations(
  map_classes_students,
  ({ one }) => ({
    class: one(classes, {
      fields: [map_classes_students.class_id],
      references: [classes.id],
    }),
    student: one(students, {
      fields: [map_classes_students.student_id],
      references: [students.id],
    }),
  })
);
