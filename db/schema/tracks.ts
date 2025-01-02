import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const tracks = pgTable("tracks", {
  id: uuid("id").notNull().primaryKey(),
  track_name: varchar("track_name", { length: 255 }).notNull(),
});
