import { pgTable, uuid, varchar, boolean } from "drizzle-orm/pg-core";

import { timestamps } from "./common";

export const otp = pgTable("otp", {
  id: uuid("id").notNull().primaryKey(),
  user_email: varchar("user_email", { length: 255 }).notNull(),
  otp: varchar("otp", { length: 6 }).notNull(), // 6-digit OTP
  // expires_at, created_at, updated_at
  used: boolean("used").default(false).notNull(), // Track if OTP was used
  ...timestamps,
});
