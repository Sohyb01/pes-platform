import { pgTable, uuid, timestamp, varchar } from "drizzle-orm/pg-core";
import { instructors, parents, students } from "./users";
import { timestamps } from "./common";

export const instructor_calls = pgTable("instructor_calls", {
  id: uuid("id").notNull().primaryKey(),
  title: varchar("title", { length: 255 }),
  description: varchar("description", { length: 255 }),
  start: timestamp("start", { withTimezone: true }),
  end: timestamp("end", {
    withTimezone: true,
  }),
  id_instructor: uuid("id_instructor")
    .notNull()
    .references(() => instructors.id),
  //
  id_student: uuid("id_student").references(() => students.id),
  id_parent: uuid("id_parent").references(() => parents.id),
  ...timestamps,
});
