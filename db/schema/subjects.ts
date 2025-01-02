import { varchar } from "drizzle-orm/pg-core";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const subjects = pgTable("subjects", {
  id: uuid("id").notNull().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
});
