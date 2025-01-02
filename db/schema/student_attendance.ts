import { timestamp } from "drizzle-orm/pg-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { attendanceStatusEnum } from "./common";
import { students } from "./users";

export const students_attendances = pgTable("attendances", {
  id: uuid("id").notNull().primaryKey(),
  status: attendanceStatusEnum("status").notNull(),
  date: timestamp("date", { withTimezone: true }).notNull(),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id),
  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id),
});
