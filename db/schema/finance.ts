import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  pgEnum,
  numeric,
} from "drizzle-orm/pg-core";
import { branches } from "./branches";

export const balanceEnum = pgEnum("balance_type", ["income", "expense"]);

export const balances = pgTable("balances", {
  id: uuid("id").notNull().primaryKey(),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
  type: balanceEnum(),
  amount: numeric("amount").notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  id_branch: uuid("id_branch").references(() => branches.id), // Foreign key to `chart_heads`
});

export const chart_heads = pgTable("chart_heads", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  type: balanceEnum(),
  id_branch: uuid("id_branch").references(() => branches.id), // Foreign key to `chart_heads`
});

// -------------------------------- Below needs revision with API

// export const subscriptions = pgTable("subscriptions", {
//   id: uuid("id").notNull().primaryKey(),

//   id_student: uuid("id_student")
//     .notNull()
//     .references(() => students.id), // Foreign key to `students`

//   start_date: timestamp("start_date", { withTimezone: true }).notNull(),
//   end_date: timestamp("end_date", { withTimezone: true }).notNull(),
//   next_billing_date: timestamp("next_billing_date", { withTimezone: true }),
//   status: varchar("status", { length: 20 }).notNull(), // e.g., 'active', 'cancelled'
//   type: varchar("subscription_type", { length: 20 }).notNull(),
//   // created_at ,updated_at
//   referral_code: varchar("referral_code", { length: 255 }),
//   price: real("price"),
//   paid: real("paid").default(0),
//   next_payment_amount: real("next_payment_amount"),

//   ...timestamps,
// });

// export const transactions = pgTable("transactions", {
//   id: uuid("id").notNull().primaryKey(),
//   id_payment: uuid("id_payment")
//     .notNull()
//     .references(() => payments.id), // Foreign key to `payments`
//   date: timestamp("date", {
//     withTimezone: true,
//   }).notNull(),
//   amount: real("amount").notNull(),
//   type: varchar("type", { length: 255 }).notNull(),
//   status: varchar("status", { length: 255 }).notNull(),
//   // created_at ,updated_at
//   ...timestamps,
// });

// export const payments = pgTable("payments", {
//   id: uuid("id").notNull().primaryKey(),
//   id_subscription: uuid("id_subscription")
//     .notNull()
//     .references(() => subscriptions.id), // Foreign key to `subscriptions`
//   amount: integer("amount").notNull(),
//   date: timestamp("date", { withTimezone: true }).notNull(),
//   id_method: uuid("id_method")
//     .notNull()
//     .references(() => payment_methods.id), // Foreign key to `methods`
//   status: varchar("status", { length: 255 }).notNull(),
//   // created_at ,updated_at
//   referral_code: varchar("referral_code", { length: 255 }),

//   ...timestamps,
// });

// export const payment_methods = pgTable("payment_methods", {
//   id: uuid("id").notNull().primaryKey(),
//   method_name: varchar("method_name", { length: 255 }).notNull(),
//   method_details: varchar("method_details", { length: 255 }).notNull(),
//   // created_at ,updated_at
//   ...timestamps,
// });

// export const fee_collections = pgTable("fee_collections", {
//   id: uuid("id").notNull().primaryKey(),
//   id_subscription: uuid("id_subscription")
//     .notNull()
//     .references(() => subscriptions.id), // Foreign key to `subscriptions`
//   due_date: timestamp("due_date", { withTimezone: true }).notNull(),
//   due_amount: real("due_amount").notNull(),
//   collection_status: varchar("collection_status", { length: 255 }).notNull(),
//   // created_at , updated_at
//   ...timestamps,
// });

// export const fees = pgTable("fees", {
//   id: uuid("id").notNull().primaryKey(),
//   type: varchar("type", { length: 50 }).notNull(),
//   amount: real("amount").notNull(),
//   targeted_role: varchar("targeted_role", { length: 50 }).notNull(),
//   status: feesStatusEnum().notNull(),
// });
