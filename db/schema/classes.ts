import { pgTable, uuid, varchar, date } from "drizzle-orm/pg-core";

import { students } from "./users";
import { programs } from "./program";
import { classTransferEnum } from "./common";

export const classes = pgTable("classes", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  times: varchar("times", { length: 255 }), // Format validation handled at the application level
  begin_date: date("begin_date").notNull(),
  end_date: date("end_date").notNull(),

  id_program: uuid("id_program")
    .notNull()
    .references(() => programs.id),
});

export const transfer_class_applications = pgTable(
  "transfer_class_applications",
  {
    id: uuid("id").notNull().primaryKey(),
    status: classTransferEnum("status").notNull().default("pending"),
    id_desired_class: uuid("id_desired_class").references(() => classes.id),
    id_student: uuid("id_student")
      .notNull()
      .references(() => students.id),
    id_current_class: uuid("id_current_class")
      .notNull()
      .references(() => classes.id),
  }
);
