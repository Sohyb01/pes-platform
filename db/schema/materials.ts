import { pgTable, uuid, text, varchar } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { class_sessions } from "./class_sessions";
import { institutes } from "./institutes";
import { instructors } from "./users";

export const materials_attachment = pgTable("materials_attachment", {
  id: uuid("id").notNull().primaryKey(),
  attachment: text("attachment").notNull(),

  id_session: uuid("id_session")
    .notNull()
    .references(() => class_sessions.id), // Foreign key to `sessions`
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // Foreign key to `classes`
  id_instructor: uuid("id_instructor")
    .notNull()
    .references(() => instructors.id), // Foreign key to `instructors`
  id_institute: uuid("id_institute")
    .notNull()
    .references(() => institutes.id), // Foreign key to `institutes`
});

export const material_access = pgTable("material_access", {
  id: uuid("id").notNull().primaryKey(),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // Foreign key to `classes`
  id_material: uuid("id_material")
    .notNull()
    .references(() => materials_attachment.id), // Foreign key to `materialsattachment`
  given_by: varchar("given_by", { length: 36 }).notNull(),
});
