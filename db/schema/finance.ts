import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  real,
  integer,
  pgEnum,
  numeric,
} from "drizzle-orm/pg-core";
import { timestamps, feesStatusEnum } from "./common";
import { students } from "./users";
import { branches } from "./branches";

const balanceEnum = pgEnum("type", ["income", "expense"]);

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").notNull().primaryKey(),

  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`

  start_date: timestamp("start_date", { withTimezone: true }).notNull(),
  end_date: timestamp("end_date", { withTimezone: true }).notNull(),
  next_billing_date: timestamp("next_billing_date", { withTimezone: true }),
  status: varchar("status", { length: 20 }).notNull(), // e.g., 'active', 'cancelled'
  subscription_type: varchar("subscription_type", { length: 20 }).notNull(),
  // created_at ,updated_at
  referral_code: varchar("referral_code", { length: 255 }),
  subscription_price: real("subscription_price"),
  subscription_paid: real("subscription_paid").default(0),
  next_payment_amount: real("next_payment_amount"),

  ...timestamps,
});

export const transactions = pgTable("transactions", {
  id: uuid("id").notNull().primaryKey(),
  id_payment: uuid("id_payment")
    .notNull()
    .references(() => payments.id), // Foreign key to `payments`
  transaction_date: timestamp("transaction_date", {
    withTimezone: true,
  }).notNull(),
  transaction_amount: real("transaction_amount").notNull(),
  transaction_type: varchar("transaction_type", { length: 255 }).notNull(),
  transaction_status: varchar("transaction_status", { length: 255 }).notNull(),
  // created_at ,updated_at
  ...timestamps,
});

export const payments = pgTable("payments", {
  id: uuid("id").notNull().primaryKey(),
  id_subscription: uuid("id_subscription")
    .notNull()
    .references(() => subscriptions.id), // Foreign key to `subscriptions`
  payment_amount: integer("payment_amount").notNull(),
  payment_date: timestamp("payment_date", { withTimezone: true }).notNull(),
  id_payment_method: uuid("id_payment_method")
    .notNull()
    .references(() => payment_methods.id), // Foreign key to `payment_methods`
  payment_status: varchar("payment_status", { length: 255 }).notNull(),
  // created_at ,updated_at
  referral_code: varchar("referral_code", { length: 255 }),

  ...timestamps,
});

export const balances = pgTable("balances", {
  id: uuid("id").notNull().primaryKey(),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
  type: balanceEnum("type"),
  amount: numeric("amount").notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  id_branch: uuid("id_branch").references(() => branches.id), // Foreign key to `chart_heads`
});

export const payment_methods = pgTable("payment_methods", {
  id: uuid("id").notNull().primaryKey(),
  method_name: varchar("MethodName", { length: 255 }).notNull(),
  method_details: varchar("MethodDetails", { length: 255 }).notNull(),
  // created_at ,updated_at
  ...timestamps,
});

export const chart_heads = pgTable("chart_heads", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  type: balanceEnum("type"),
  id_branch: uuid("id_branch").references(() => branches.id), // Foreign key to `chart_heads`
});

export const fee_collections = pgTable("fee_collections", {
  id: uuid("id").notNull().primaryKey(),
  id_subscription: uuid("id_subscription")
    .notNull()
    .references(() => subscriptions.id), // Foreign key to `subscriptions`
  due_date: timestamp("due_date", { withTimezone: true }).notNull(),
  due_amount: real("due_amount").notNull(),
  collection_status: varchar("collection_status", { length: 255 }).notNull(),
  // created_at , updated_at
  ...timestamps,
});

export const fees = pgTable("fees", {
  id: uuid("id").notNull().primaryKey(),
  fee_type: varchar("fee_type", { length: 255 }).notNull(),
  fee_amount: real("fee_amount").notNull(),
  fee_targeted_role: varchar("fee_targeted_role", { length: 255 }).notNull(),
  status: feesStatusEnum("status").notNull(),
});
