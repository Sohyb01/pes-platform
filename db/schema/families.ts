import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";
// import { v4 } from "uuid";
import { timestamps } from "./common";

export const families = pgTable("families", {
  id: uuid("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  ...timestamps,
});
