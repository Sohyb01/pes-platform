import { pgTable, uuid, varchar, pgEnum } from "drizzle-orm/pg-core";

import { timestamps } from "./common";

// Enum for rules category
export const rulesCategoryEnum = pgEnum("category", [
  "company-wide",
  "students",
  "employees",
]);

export const rules_and_regulations = pgTable("rules_and_regulations", {
  id: uuid("id").notNull().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: varchar("content", { length: 1000 }).notNull(),
  category: rulesCategoryEnum().default("company-wide").notNull(), // Category with default
  // created_at, updated_at
  ...timestamps,
});
