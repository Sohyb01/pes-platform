import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./common";

export const notification_change = pgTable("notification_change", {
  id: uuid("id").notNull().primaryKey(),
  id_notification_object: uuid("id_notification_object")
    .notNull()
    .references(() => notification_object.id), // References notification_object
  id_actor: uuid("id_actor").notNull(), // The user or system making the change
  status: varchar("status", { length: 100 }),
});

export const notification_entities = pgTable("notification_entities", {
  id: uuid("id").notNull().primaryKey(),
  entity_name: varchar("entity_name", { length: 255 }).notNull(),
});

export const notification_entity_types = pgTable("notification_entity_types", {
  id: uuid("id").notNull().primaryKey(),
  id_entity: uuid("id_entity")
    .notNull()
    .references(() => notification_entities.id), // References notification_entities
  type: varchar("type", { length: 100 }).notNull(),
});

export const notification_object = pgTable("notification_object", {
  id: uuid("id").notNull().primaryKey(),
  id_entity: uuid("id_entity")
    .notNull()
    .references(() => notification_entities.id), // References notification_entities
  id_entity_type: uuid("id_entity_type")
    .notNull()
    .references(() => notification_entity_types.id), // References notification_entity_types
  // created_at
  status: varchar("status", { length: 100 }), // Optional status field
  ...timestamps,
});

export const notifications = pgTable("notifications", {
  id: uuid("id").notNull().primaryKey(),
  id_notification_object: uuid("id_notification_object")
    .notNull()
    .references(() => notification_object.id), // References notification_object
  id_notifier: varchar("id_notifier", { length: 255 }).notNull(), // The user or system generating the notification
  status: varchar("status", { length: 100 }), // Optional status field
});
