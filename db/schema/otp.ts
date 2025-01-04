import {
  pgTable,
  uuid,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

import { timestamps } from "./common";

export const otp = pgTable("otp", {
  id: uuid("id").notNull().primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  otp: varchar("otp", { length: 6 }).notNull(), // 6-digit OTP
  // expires_at, created_at, updated_at
  was_used: boolean("was_used").default(false).notNull(), // Track if OTP was used
  expires_at: timestamp("expires_at"),
  ...timestamps,
});
