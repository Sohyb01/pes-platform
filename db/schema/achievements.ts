import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const student_achievements = pgTable("achievements", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  image: varchar("image", { length: 255 }).notNull(),
  category: varchar("category", { length: 255 }),
});
