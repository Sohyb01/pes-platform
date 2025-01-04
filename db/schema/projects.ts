import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { students } from "./users";
import { program_stages } from "./programs";

export const projects = pgTable("projects", {
  id: uuid("id").notNull().primaryKey(),
  name: text("name").notNull(),
  url: text("url"),
  description: text("description").notNull(),

  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`
  id_program_stage: uuid("id_program_stage")
    .notNull()
    .references(() => program_stages.id), // Foreign key to `tracks`
});
