import { pgTable, varchar, uuid, numeric } from "drizzle-orm/pg-core";
// import { v4 } from "uuid";
import { timestamps } from "./common-schema";

export const reviews = pgTable("reviews", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  text: varchar("text", { length: 255 }).notNull(),
  rating: numeric("rating"), // Add extra refine for min 1 max 5 stars
  ...timestamps,
});
