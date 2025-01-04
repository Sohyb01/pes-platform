// import { pgTable, uuid, varchar, real } from "drizzle-orm/pg-core";

// import { timestamps } from "./common";
// import { students } from "./users";

// export const evaluations = pgTable("evaluations", {
//   id: uuid("id").notNull().primaryKey(),
//   timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
//   points: varchar("points", { length: 255 }).notNull(),
//   id_class: uuid("id_class")
//     .notNull()
//     .references(() => classes.id), // Foreign key to `classes`
//   id_student: uuid("id_student")
//     .notNull()
//     .references(() => students.id), // Foreign key to `students`
// });

// export const rewards = pgTable("rewards", {
//   id: uuid("id").notNull().primaryKey(),
//   name: varchar("name", { length: 255 }).notNull(),
//   points_required: real("points_required").notNull(),
//   description: varchar("description", { length: 255 }).notNull(),
//   // created_at, updated_at
//   ...timestamps,
// });

// export const redeemed_rewards = pgTable("redeemed_rewards", {
//   id: uuid("id").notNull().primaryKey(),
//   reward: uuid("reward_id")
//     .notNull()
//     .references(() => rewards.id), // Foreign key to `rewards`
//   user_id: varchar("user_id", { length: 255 }).notNull(),
//   // redeemed_at
//   ...timestamps,
// });

// export const points = pgTable("points", {
//   id: uuid("id").notNull().primaryKey(),
//   user_id: varchar("user_id", { length: 255 }).unique().notNull(),
//   points_earned: real("points_earned").default(0).notNull(),
//   points_redeemed: real("points_redeemed").default(0).notNull(),
//   // created_at, updated_at
//   ...timestamps,
// });

// export const pointsTransactions = pgTable("points_transactions", {
//   id: uuid("id").notNull().primaryKey(),
//   points: uuid("points_id")
//     .notNull()
//     .references(() => points.id), // Foreign key to `points`
//   user_id: varchar("user_id", { length: 255 }).notNull(),
//   points_earned: real("points_earned").default(0),
//   points_spent: real("points_spent").default(0),
//   source: varchar("source", { length: 255 }),
//   source_id: varchar("source_id", { length: 255 }),
//   // created_at
//   ...timestamps,
// });
