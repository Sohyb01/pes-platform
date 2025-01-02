import {
  pgTable,
  varchar,
  text,
  numeric,
  date,
  uuid,
  boolean,
} from "drizzle-orm/pg-core";

import {
  currencyEnum,
  languageEnum,
  rolesEnum,
  socialMedias,
  themeEnum,
  timestamps,
  timezoneEnum,
} from "./common";
import { families } from "./families";
import { institutes } from "./institutes";
// import { v4 } from "uuid";

// ---

const baseUser = {
  id: uuid("id").primaryKey(),
  //
  role: rolesEnum("role").notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  first_name: varchar("first_name", { length: 255 }).notNull(),
  last_name: varchar("last_name", { length: 255 }).notNull(),
  date_of_birth: date("date_of_birth").notNull(),
  gender: varchar("gender", { length: 255 }).notNull(),
  //   --- Contact / Legal Info ---
  national_id: varchar("national_id", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  address_line_one: text("address_line_one").notNull(),
  address_line_two: text("address_line_two").notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 255 }).notNull(),
  ...socialMedias,
  // Optional information
  image: text("image"),
  religion: varchar("religion", { length: 255 }),
  notes: varchar("notes", { length: 255 }),
  //   Customization
  theme: themeEnum().default("light"),
  timezone: timezoneEnum(),
  language: languageEnum().default("eng"),
  currency: currencyEnum().default("EGP"),
  // Timestamps (created, updated, deleted)
  active: boolean("active").notNull().default(true),
  //
  id_institute: uuid("id_institute")
    .notNull()
    .references(() => institutes.id), // Foreign key to family

  // Satus & FKs
  ...timestamps,
};

export const instructors = pgTable("instructors", {
  faculty: varchar("faculty", { length: 255 }).notNull(),
  university: varchar("university", { length: 255 }).notNull(),
  specialty: varchar("specialty", { length: 255 }).notNull(),
  salary: numeric("salary").notNull(),
  //   Core employee schema
  ...baseUser,
});

export const admins_financial = pgTable("admins_financial", {
  ...baseUser,
});

export const admins_educational = pgTable("admins_educational", {
  ...baseUser,
});

export const students = pgTable("students", {
  // Student specific
  referral_code: varchar("referral_code", { length: 255 }).notNull(),
  diseases: varchar("diseases", { length: 255 }).notNull(),
  has_laptop: boolean("has_laptop").notNull().default(false),
  sibling_count: numeric("sibling_count"),
  id_family: uuid("id_family").references(() => families.id), // Foreign key to family
  //
  ...baseUser,
});

export const parents = pgTable("parent", {
  referral_code: varchar("referral_code", { length: 255 }).notNull(),
  //
  ...baseUser,
});

export const receptionists = pgTable("receptionists", {
  ...baseUser,
});
