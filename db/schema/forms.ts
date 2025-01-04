// Review later

// import {
//   pgTable,
//   uuid,
//   varchar,
//   text,
//   real,
//   integer,
// } from "drizzle-orm/pg-core";

// import {
//   franchiseStatusEnum,
//   reviewStatusEnum,
//   pendingInstructorStatusEnum,
// } from "./common";

// export const contactUs = pgTable("contact_us", {
//   id: uuid("id").notNull().primaryKey(),
//   first_name: varchar("first_name", { length: 255 }).notNull(),
//   last_name: varchar("last_name", { length: 255 }).notNull(),
//   phone: varchar("phone", { length: 255 }).notNull(),
//   email: varchar("email", { length: 255 }).notNull(),
//   subject: varchar("subject", { length: 255 }).notNull(),
//   city: varchar("city", { length: 255 }).notNull(),
//   street: varchar("street", { length: 255 }).notNull(),
//   postcode: varchar("postcode", { length: 255 }).notNull(),
//   idea: text("idea").notNull(),
// });

// export const franchises = pgTable("franchises", {
//   id: uuid("id").notNull().primaryKey(),
//   name: varchar("name", { length: 255 }).notNull(),
//   profession: varchar("profession", { length: 255 }).notNull(),
//   franchise_location: varchar("franchise_location", { length: 255 }).notNull(),
//   budget: real("budget").notNull(),
//   motivation: text("motivation").notNull(),
//   expectations: text("expectations").notNull(),
//   connection_type: varchar("connection_type", { length: 255 }).notNull(),
//   requirement_stage: varchar("requirement_stage", { length: 255 }).notNull(),
//   comments: text("comments").notNull(),
//   email: varchar("email", { length: 255 }).notNull(),
//   phone_number: varchar("phone_number", { length: 255 }).notNull(),
//   city: varchar("city", { length: 255 }).notNull(),
//   country: varchar("country", { length: 255 }).notNull(),
//   status: franchiseStatusEnum("status").default("pending"),
// });

// export const reviews = pgTable("reviews", {
//   id: uuid("id").notNull().primaryKey(),
//   reviewer_full_name: varchar("reviewer_full_name", { length: 255 }).notNull(),
//   reviewer_email: varchar("reviewer_email", { length: 255 }).notNull(),
//   reviewer_job: varchar("reviewer_job", { length: 255 }).notNull(),
//   reviewer_rate: integer("reviewer_rate").notNull(),
//   reviewer_desc: varchar("reviewer_desc", { length: 255 }).notNull(),
//   review_status: reviewStatusEnum("review_status").notNull().default("pending"),
// });

// export const schools_waiting = pgTable("schools_waiting", {
//   id: uuid("id").notNull().primaryKey(),
//   school_name: varchar("school_name", { length: 255 }).notNull(),
//   contact_person: varchar("contact_person", { length: 255 }).notNull(),
//   phone_number: varchar("phone_number", { length: 255 }).notNull(),
//   plans: text("plans").notNull(),
//   email: varchar("email", { length: 255 }).notNull(),
//   proficiency_level: text("proficiency_level").notNull(),
//   budget: varchar("budget", { length: 255 }).notNull(),
//   grades: text("grades").notNull(),
//   capacity: varchar("capacity", { length: 255 }).notNull(),
//   expectations: text("expectations").notNull(),
//   status: franchiseStatusEnum("status").notNull().default("pending"),
// });

// export const pending_instructors = pgTable("pending_instructors", {
//   id: uuid("id").notNull().primaryKey(),
//   pinstructor_nid: varchar("pinstructor_nid", { length: 255 }).notNull(),
//   pinstructor_fullname: varchar("pinstructor_fullname", {
//     length: 255,
//   }).notNull(),
//   pinstructor_age: varchar("pinstructor_age", { length: 255 }).notNull(),
//   pinstructor_email: varchar("pinstructor_email", { length: 255 }).notNull(),
//   pinstructor_phonenum: varchar("pinstructor_phonenum", {
//     length: 255,
//   }).notNull(),
//   pinstructor_gender: varchar("pinstructor_gender", { length: 255 }).notNull(),
//   pinstructor_faculty: varchar("pinstructor_faculty", {
//     length: 255,
//   }).notNull(),
//   pinstructor_whatsapp: varchar("pinstructor_whatsapp", {
//     length: 255,
//   }).notNull(),
//   joined_date: varchar("joined_date", { length: 255 }).notNull(),
//   pinstructor_cv: text("pinstructor_cv").notNull(),
//   pinstructor_experience: text("pinstructor_experience").notNull(),
//   instructor_picture: text("instructor_picture").notNull(),
//   pinstructor_major: varchar("pinstructor_major", { length: 255 }).notNull(),
//   status: pendingInstructorStatusEnum("status").default("pending"),
// });

// export const partnerships = pgTable("partnerships", {
//   id: uuid("id").notNull().primaryKey(),
//   partner_name: varchar("partner_name", { length: 255 }).notNull(),
//   partner_logo: text("partner_logo").notNull(),
//   status: varchar("status", { length: 255 }),
// });
