import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { instructors } from "./users";
import { classes } from "./classes";

export const instructorsClassesRelations = relations(
  instructors,
  ({ many }) => ({
    map_classes_instructors: many(map_classes_instructors),
  })
);

export const classesInstructorsRelations = relations(classes, ({ many }) => ({
  map_classes_instructors: many(map_classes_instructors),
}));

export const map_classes_instructors = pgTable(
  "map_classes_instructors",
  {
    instructor_id: uuid("instructor_id")
      .notNull()
      .references(() => instructors.id),
    class_id: uuid("class_id")
      .notNull()
      .references(() => classes.id),
  },
  (t) => [t.instructor_id, t.class_id]
);

export const instructorsToClassesRelations = relations(
  map_classes_instructors,
  ({ one }) => ({
    class: one(classes, {
      fields: [map_classes_instructors.class_id],
      references: [classes.id],
    }),
    instructor: one(instructors, {
      fields: [map_classes_instructors.instructor_id],
      references: [instructors.id],
    }),
  })
);
