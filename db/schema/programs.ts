import {
  pgTable,
  varchar,
  uuid,
  text,
  date,
  numeric,
  doublePrecision,
} from "drizzle-orm/pg-core";
// import { v4 } from "uuid";
import { timestamps } from "./common";

export const programs = pgTable("programs", {
  id: uuid("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  start: date("start"), // Optional
  ...timestamps,
});

export const program_stages = pgTable("program_stages", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  num_of_weeks: numeric("num_of_weeks").notNull(),
  price: doublePrecision("price").notNull(),
  //   subjects: text("subjects").notNull(), // Serialized array of strings
  id_program: uuid("id_program")
    .notNull()
    .references(() => programs.id), // Foreign key to programs
  ...timestamps,
});
