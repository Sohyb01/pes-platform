import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { instructors } from "./users";
import { classes } from "./classes";
import { timestamps } from "./common";

export const newsletter_subscription = pgTable("newsletter_subscription", {
  id: uuid("id").notNull().primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  first_name: varchar("first_name", { length: 255 }).notNull(),
  last_name: varchar("last_name", { length: 255 }).notNull(),
  ...timestamps,
});

export const class_announcements = pgTable("class_announcements", {
  id: uuid("id").notNull().primaryKey(),
  title: varchar("title", {
    length: 255,
  })
    .notNull()
    .default("Important Announcement!"),
  content: varchar("content", {
    length: 1000,
  }).notNull(),
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id), // Foreign key to the class receiving the announcement
  id_instructor: uuid("id_instructor")
    .notNull()
    .references(() => instructors.id), // Foreign key to the instructor sending the announcement
});
