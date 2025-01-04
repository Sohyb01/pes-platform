// Do later with ChatGPT

// import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

// import { classes } from "./classes";

// export const contacts = pgTable("contacts", {
//   id: uuid("id").notNull().primaryKey(),
//   phonenum: varchar("phonenum", { length: 255 }).notNull(),
//   contact_name: varchar("contact_name", { length: 255 }).notNull(),
//   profile_photo: varchar("profile_photo", { length: 255 }).notNull(),
//   host_id: varchar("host_id", { length: 36 }).notNull(),
// });

// export const conversation_mapping = pgTable("conversation_mapping", {
//   id: uuid("id").notNull().primaryKey(),
//   id_conversation: uuid("id_conversation")
//     .notNull()
//     .references(() => conversations.id), // Foreign key to conversations
//   user_id: varchar("user_id", { length: 36 }).notNull(),
//   id_class: uuid("id_class")
//     .notNull()
//     .references(() => classes.id), // Foreign key to classes
// });

// export const conversations = pgTable("conversations", {
//   id: uuid("id").notNull().primaryKey(),
//   conversation_name: varchar("conversation_name", { length: 100 }).notNull(),
//   host_id: varchar("host_id", { length: 100 }).notNull(), // Host of the conversation
// });

// export const messages = pgTable("messages", {
//   id: uuid("id").notNull().primaryKey(),
//   message_text: text("message_text").notNull(),
//   message_media: text("message_media"),
//   sent_datetime: timestamp("sent_datetime", { withTimezone: true }).notNull(),
//   received_datetime: timestamp("received_datetime", {
//     withTimezone: true,
//   }).notNull(),
//   id_from: varchar("id_from", { length: 36 }).notNull(),
//   id_to: varchar("id_to", { length: 36 }).notNull(),

//   id_conversation: uuid("id_conversation")
//     .notNull()
//     .references(() => conversations.id), // Foreign key to conversations
//   id_contact: uuid("id_contact")
//     .notNull()
//     .references(() => contacts.id), // Foreign key to contacts
// });

// export const messages_attachments = pgTable("messages_attachments", {
//   id: uuid("id").notNull().primaryKey(),
//   attachment: text("attachment").notNull(), // Path or URL of the attachment
//   description: text("description").notNull(),
//   sender_id: varchar("sender_id", { length: 36 }).notNull(),
//   receiver_id: varchar("receiver_id", { length: 36 }).notNull(),
//   conversation_id: uuid("conversation_id")
//     .notNull()
//     .references(() => conversations.id), // Foreign key to conversations
//   timestamp: timestamp("timestamp", { withTimezone: true }).notNull(),
// });
