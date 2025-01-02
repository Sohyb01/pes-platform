import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { institutes } from "./institutes";

export const branches = pgTable("branches", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  logo: varchar("logo", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  website: varchar("website", { length: 255 }).notNull(),
  address_line_one: varchar("address_line_one", { length: 255 }).notNull(),
  address_line_two: varchar("address_line_two", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  id_institute: uuid("id_institute")
    .notNull()
    .references(() => institutes.id), // Foreign key to `institutes`
});
