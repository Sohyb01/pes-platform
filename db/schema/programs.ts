import { pgTable, varchar, uuid, text, date } from "drizzle-orm/pg-core";
// import { v4 } from "uuid";
import { timestamps } from "./common";

export const programs = pgTable("programs", {
  id: uuid("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: varchar("price", { length: 255 }).notNull(),
  start: date("start"), // Optional
  end: date("end"), // Optional
  ...timestamps,
});

export const program_stages = pgTable("program_stages", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  //   subjects: text("subjects").notNull(), // Serialized array of strings
  id_program: uuid("id_program")
    .notNull()
    .references(() => programs.id), // Foreign key to programs
  ...timestamps,
});
