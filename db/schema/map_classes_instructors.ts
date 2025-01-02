import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { instructors } from "./users";
import { classes } from "./classes";

export const instructorsRelations = relations(instructors, ({ many }) => ({
  map_classes_instructors: many(map_classes_instructors),
}));

export const classesRelations = relations(classes, ({ many }) => ({
  map_classes_instructors: many(map_classes_instructors),
}));

export const map_classes_instructors = pgTable(
  "map_classes_instructors",
  {
    instructorId: uuid("instructor_id")
      .notNull()
      .references(() => instructors.id),
    classId: uuid("class_id")
      .notNull()
      .references(() => classes.id),
  },
  (t) => [t.instructorId, t.classId]
);

export const instructorsToClassesRelations = relations(
  map_classes_instructors,
  ({ one }) => ({
    class: one(classes, {
      fields: [map_classes_instructors.classId],
      references: [classes.id],
    }),
    instructor: one(instructors, {
      fields: [map_classes_instructors.instructorId],
      references: [instructors.id],
    }),
  })
);
