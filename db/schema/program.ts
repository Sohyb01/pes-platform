import {
  pgTable,
  uuid,
  varchar,
  text,
  real,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { students } from "./users";

export const subject_mappings = pgTable("subject_mappings", {
  id: uuid("id").notNull().primaryKey(),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // One-to-one relationship with `classes`
  id_subject: uuid("id_subject")
    .notNull()
    .references(() => subjects.id), // Foreign key to `subjects`
});

export const subjects = pgTable("subjects", {
  id: uuid("id").notNull().primaryKey(),
  subject_name: varchar("subject_name", { length: 255 }).notNull(),
  subject_mark: real("subject_mark").notNull(),
  id_track: uuid("id_track")
    .notNull()
    .references(() => tracks.id), // Foreign key to `tracks`
  id_program: uuid("id_program")
    .notNull()
    .references(() => programs.id), // Foreign key to `programs`
});

export const tracks = pgTable("tracks", {
  id: uuid("id").notNull().primaryKey(),
  track_name: varchar("track_name", { length: 255 }).notNull(),
});

export const program_enrolled = pgTable("program_enrolled", {
  id: uuid("id").notNull().primaryKey(),

  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`
  id_program: uuid("id_program")
    .notNull()
    .references(() => programs.id), // Foreign key to `programs`
});

export const programs = pgTable("programs", {
  id: uuid("id").notNull().primaryKey(),
  program_name: varchar("program_name", { length: 100 }).notNull(),
  program_levels: jsonb("program_levels").default("[]").notNull(), // JSON array for levels
  program_price: real("program_price").notNull(),
  description: text("description").notNull(),
  duration: varchar("duration", { length: 255 }).notNull(),
  start_date: timestamp("start_date", { withTimezone: true }).notNull(),
});

export const program_levels = pgTable("program_levels", {
  id: uuid("id").notNull().primaryKey(),
  id_program: uuid("id_program")
    .notNull()
    .references(() => programs.id), // Foreign key to `programs`
  level_name: varchar("level_name", { length: 100 }).notNull(),
  description: text("description").notNull(),
  level_price: real("level_price").notNull(),
  subjects: jsonb("subjects").default("[]").notNull(), // JSON array for subjects
});

export const projects = pgTable("projects", {
  id: uuid("id").notNull().primaryKey(),
  project_name: text("project_name").notNull(),
  project_url: text("project_url"),
  description: text("description").notNull(),

  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`
  id_track: uuid("id_track")
    .notNull()
    .references(() => tracks.id), // Foreign key to `tracks`
});

export const project_level_mapping = pgTable("project_level_mapping", {
  id: uuid("id").notNull().primaryKey(),
  project_name: text("project_name").notNull(),

  id_level: uuid("id_level")
    .notNull()
    .references(() => program_levels.id), // Foreign key to `program_levels`
});
