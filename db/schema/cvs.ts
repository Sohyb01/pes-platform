// Revise later

// import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
// import { students } from "./users";

// export const cvs = pgTable("cvs", {
//   id: uuid("id").notNull().primaryKey(), // Primary key
//   attachment: varchar("description", { length: 255 }).notNull(), // JSON field for attachment metadata
//   file: varchar("description", { length: 255 }).notNull(),
//   id_student: uuid("id_student")
//     .notNull()
//     .references(() => students.id), // Foreign key to `students`

//   description: varchar("description", { length: 1000 }).notNull(),
// });
