import { pgTable, uuid, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { students } from "./users";
import { classes } from "./classes";
import { timestamps } from "./common";

export const class_sessions = pgTable("class_sessions", {
  id: uuid("id").notNull().primaryKey(),
  title: varchar("title", { length: 255 }),
  description: varchar("description", { length: 255 }),
  start: timestamp("start", { withTimezone: true }),
  end: timestamp("end", {
    withTimezone: true,
  }),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id),
  ...timestamps,
});

// Many to many between Sessions & Students
export const map_class_sessions_students = pgTable(
  "students_to_class_sessions",
  {
    student_id: uuid("student_id")
      .notNull()
      .references(() => students.id),
    class_session_id: uuid("session_id")
      .notNull()
      .references(() => class_sessions.id),
  },
  (t) => [t.student_id, t.class_session_id]
);

export const studentsRelations = relations(students, ({ many }) => ({
  map_class_sessions_students: many(map_class_sessions_students),
}));

export const classSessionsRelations = relations(class_sessions, ({ many }) => ({
  map_class_sessions_students: many(map_class_sessions_students),
}));

export const studentsToSessionsRelations = relations(
  map_class_sessions_students,
  ({ one }) => ({
    classSession: one(class_sessions, {
      fields: [map_class_sessions_students.class_session_id],
      references: [class_sessions.id],
    }),
    student: one(students, {
      fields: [map_class_sessions_students.student_id],
      references: [students.id],
    }),
  })
);
