import { pgTable, uuid, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";

import { classes } from "./classes";
import { students, instructors } from "./users";
import { timestamps } from "./common";
import { subjects } from "./subjects";

export const assignmentStatusEnum = pgEnum("assignment_status", [
  "submitted",
  "reviewed",
  "due",
]);

const baseAssignment = {
  id: uuid("id").notNull().primaryKey(),
  url: varchar("url", { length: 255 }),
  due_date: timestamp("due_date", {
    withTimezone: true,
  }).notNull(),
  attachment: varchar("attachment", { length: 255 }),
  description: varchar("description", { length: 255 }),
  status: assignmentStatusEnum(),
  //
  id_subject: uuid("id_subject")
    .notNull()
    .references(() => subjects.id),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id),
  id_instructor: uuid("id_instructor") // Sender
    .notNull()
    .references(() => instructors.id),
  notes: varchar("notes", { length: 255 }),
  //
  ...timestamps,
};

export const assignments = pgTable("assignments", {
  ...baseAssignment,
});

export const assignments_handed = pgTable("assignments_handed", {
  ...baseAssignment,
  id_assignment: uuid("id_assignment")
    .notNull()
    .references(() => assignments.id),
  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id),
  ...timestamps,
});

export const feedback = pgTable("feedback", {
  id: uuid("id").notNull().primaryKey(),
  grade: varchar("grade", { length: 255 }).notNull(),
  desc: varchar("desc", { length: 255 }).notNull(),
  id_assignment_handed: uuid("id_assignment_handed")
    .notNull()
    .references(() => assignments_handed.id),
});
