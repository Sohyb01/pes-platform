import { pgTable, uuid, varchar, text } from "drizzle-orm/pg-core";

import { rulesCategoryEnum, timestamps } from "./common";

export const rulesAndRegulations = pgTable("rules_and_regulations", {
  id: uuid("id").notNull().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  category: rulesCategoryEnum("category").default("whole place").notNull(), // Category with default
  // created_at, updated_at
  ...timestamps,
});
