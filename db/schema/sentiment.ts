import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  real,
} from "drizzle-orm/pg-core";

import { timestamps } from "./common";
import { classes } from "./classes";
import { students } from "./users";
import { institutes } from "./institutes";

export const certificates = pgTable("certificates", {
  id: uuid("id").notNull().primaryKey(),
  serial_number: varchar("serial_number", { length: 255 }).notNull(),
  certificate_type: varchar("certificate_type", { length: 255 }).notNull(),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // Foreign key to `classes`
  student_name: text("student_name").notNull(),
  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`
});

export const evaluations = pgTable("evaluations", {
  id: uuid("id").notNull().primaryKey(),
  timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
  points: varchar("points", { length: 255 }).notNull(),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // Foreign key to `classes`
  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id), // Foreign key to `students`
});

export const badges = pgTable("badges", {
  id: uuid("id").notNull().primaryKey(),
  badge_name: varchar("badge_name", { length: 255 }).notNull(),
  badge_description: varchar("badge_description", { length: 255 }).notNull(),
  badge_image: varchar("badge_image", { length: 2048 }).notNull(),
  badge_category: varchar("category", { length: 255 }),
  id_institute: uuid("id_institute").references(() => institutes.id), // Foreign key to `institutes`
});

export const badges_achieved = pgTable("badges_achieved", {
  id: uuid("id").notNull().primaryKey(),
  badge_id: uuid("badge_id")
    .notNull()
    .references(() => badges.id), // Foreign key to `badges`
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // Foreign key to `classes`
  date_achieved: timestamp("date_achieved", { withTimezone: true }),
  id_achievement_: varchar("id_achievement_", { length: 255 }),
  achievement_category: varchar("achievement_category", { length: 255 }),
  achieved_by: varchar("achieved_by", { length: 255 }),
  id_institute: uuid("id_institute").references(() => institutes.id), // Foreign key to `institutes`, nullable
});

export const rewards = pgTable("rewards", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  points_required: real("points_required").notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  // created_at, updated_at
  ...timestamps,
});

export const redeemed_rewards = pgTable("redeemed_rewards", {
  id: uuid("id").notNull().primaryKey(),
  reward: uuid("reward_id")
    .notNull()
    .references(() => rewards.id), // Foreign key to `rewards`
  user_id: varchar("user_id", { length: 255 }).notNull(),
  // redeemed_at
  ...timestamps,
});

export const points = pgTable("points", {
  id: uuid("id").notNull().primaryKey(),
  user_id: varchar("user_id", { length: 255 }).unique().notNull(),
  points_earned: real("points_earned").default(0).notNull(),
  points_redeemed: real("points_redeemed").default(0).notNull(),
  // created_at, updated_at
  ...timestamps,
});

export const pointsTransactions = pgTable("points_transactions", {
  id: uuid("id").notNull().primaryKey(),
  points: uuid("points_id")
    .notNull()
    .references(() => points.id), // Foreign key to `points`
  user_id: varchar("user_id", { length: 255 }).notNull(),
  points_earned: real("points_earned").default(0),
  points_spent: real("points_spent").default(0),
  source: varchar("source", { length: 255 }),
  source_id: varchar("source_id", { length: 255 }),
  // created_at
  ...timestamps,
});
