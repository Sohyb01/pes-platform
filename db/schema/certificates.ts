import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { students } from "./users";

export const certificates = pgTable("certificates", {
  id: uuid("id").notNull().primaryKey(),
  student_name: varchar("student_name", { length: 255 }).notNull(),
  serial_number: varchar("serial_number", { length: 255 }).notNull(),
  type: varchar("certificate_type", { length: 255 }).notNull(), // "type" is reserved in postgresc
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // Foreign key to `classes`
  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`
});
