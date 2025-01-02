import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

import { timestamps } from "./common";

export const instituteApplicationEnum = pgEnum("instituteApplication", [
  "pending",
  "approved",
  "rejected",
]);

export const institutes = pgTable("institutes", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  logo: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  address_line_one: varchar("address_line_one", { length: 255 }).notNull(),
  address_line_two: varchar("address_line_two", {
    length: 255,
  }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  website: varchar("website", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  max_students: integer("max_students").default(0),
  max_teachers: integer("max_teachers").default(0),
  max_grades: integer("max_grades").default(0),
  max_classes: integer("max_classes").default(0),
  max_parents: integer("max_parents").default(0),
  max_supervisors: integer("max_supervisors").default(0),
});

export const institute_request = pgTable("institute_request", {
  id: uuid("id").notNull().primaryKey(),
  id_institute: uuid("id_institute")
    .notNull()
    .references(() => institutes.id), // Foreign key to `institutes`
  request: text("request").notNull(),
  // created_at ,updated_at
  max_students: integer("max_students").default(0),
  max_parents: integer("max_parents").default(0),
  max_teachers: integer("max_teachers").default(0),
  max_supervisors: integer("max_supervisors").default(0),
  max_classes: integer("max_classes").default(0),
  max_grades: integer("max_grades").default(0),
  status: text("status"),
  ...timestamps,
});
