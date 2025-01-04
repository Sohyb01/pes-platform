import { pgTable, uuid, timestamp } from "drizzle-orm/pg-core";

import { instructors, receptionists } from "./users";
import { attendanceStatusEnum } from "./common";

export const instructors_attendance = pgTable("instructors_attendance", {
  id: uuid("id").notNull().primaryKey(),
  status: attendanceStatusEnum().notNull(),
  date: timestamp("date", { withTimezone: true }).notNull(),
  check_in: timestamp("check_in"),
  check_out: timestamp("check_out"),
  id_instructor: uuid("id_instructor")
    .notNull()
    .references(() => instructors.id),
});

export const receptionists_attendance = pgTable("receptionists_attendance", {
  id: uuid("id").notNull().primaryKey(),
  status: attendanceStatusEnum().notNull(),
  date: timestamp("date", { withTimezone: true }).notNull(),
  check_in: timestamp("check_in"),
  check_out: timestamp("check_out"),
  id_receptionist: uuid("id_receptionist")
    .notNull()
    .references(() => receptionists.id),
});
