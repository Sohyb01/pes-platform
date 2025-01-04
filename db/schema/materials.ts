import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { instructors } from "./users";
import { boolean } from "drizzle-orm/pg-core";

export const materials = pgTable("materials", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  attachment: varchar("attachment", { length: 255 }).notNull(),

  id_instructor: uuid("id_instructor")
    .notNull()
    .references(() => instructors.id), // Foreign key to `instructors`
  admin_only: boolean("admin_only").notNull().default(true),
});
