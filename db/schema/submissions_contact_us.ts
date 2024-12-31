import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";
// import { v4 } from "uuid";
import { timestamps } from "./common";

export const submissions_contact_us = pgTable("submissions_contact_us", {
  id: uuid("id").primaryKey(),
  first_name: varchar("first_name", { length: 255 }).notNull(),
  last_name: varchar("last_name", { length: 255 }).notNull(),
  mobile: varchar("mobile", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  city: varchar("city", { length: 255 }).notNull(),
  message: varchar("message", { length: 255 }).notNull(),
  ...timestamps,
});
