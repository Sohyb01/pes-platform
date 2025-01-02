import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { students } from "./users";
import { tracks } from "./program";
import { timestamps } from "./common";

export const display_projects = pgTable("display_projects", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  url: varchar("url", { length: 255 }),
  description: varchar("description", { length: 255 }).notNull(),
  //
  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`
  id_track: uuid("id_track").references(() => tracks.id), // Foreign key to `tracks`
  ...timestamps,
});

export const display_project_images = pgTable("display_projects_images", {
  id: uuid("id").notNull().primaryKey(),
  src: varchar("src", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  id_display_project: uuid("id_display_project")
    .notNull()
    .references(() => display_projects.id),
});
