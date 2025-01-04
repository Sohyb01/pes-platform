// import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
// import { timestamps } from "./common";

// export const invitations = pgTable("invitations", {
//   id: uuid("id").notNull().primaryKey(),
//   inviter: varchar("inviter", { length: 255 }).notNull(), // ID of the user sending the invitation
//   invitee: varchar("invitee", { length: 255 }).notNull(), // ID of the invited user
//   referral_code: varchar("referral_code", { length: 255 }).notNull(), // Referral code
//   // created_at ,updated_at
//   status: varchar("status", { length: 255 }).default("pending").notNull(),
//   id_payment: uuid("id_payment").references(() => payments.id), // Foreign key to `payments` table

//   ...timestamps,
// });

// export const invite_and_earn = pgTable("invite_and_earn", {
//   id: uuid("id").notNull().primaryKey(),
//   timestamp: timestamp("timestamp", { withTimezone: true }).notNull(), // Timestamp of the invite and earn action
//   id_subscriptions: uuid("id_subscriptions")
//     .notNull()
//     .references(() => subscriptions.id), // Foreign key to `subscriptions` table
//   id_guest: varchar("id_guest").notNull(),
//   referral_code: varchar("referral_code", { length: 255 }).notNull(), // Referral code
//   id_host: varchar("id_host").notNull(),

//   ...timestamps,
// });
